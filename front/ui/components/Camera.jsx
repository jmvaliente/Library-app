import React, { useState, useEffect, useLayoutEffect } from 'react'
import Quagga from 'quagga'

/* const CONFIG = {
    numOfWorkers: 4,
    locate: true,
    inputStream: {...},
    frequency: 10,
    decoder:{...},
    locator: {...},
    debug: false,
  } */

export default function Camera () {
  const [activeScanner, setActiveScanner] = useState(false)
  const [code, setCode] = useState('')
  const [init, setInit] = useState(false)
  useLayoutEffect(() => {
    console.log(document)
  })
  useEffect(() => {
    console.log(Quagga)
    if (init) {
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: document.getElementById('scanner-container')
        },
        decoder: {
          readers: ['ean_reader'],
          config: {
            supplements: [
              'ean_5_reader', 'ean_2_reader'
            ]
          },
          debug: {
            drawScanline: true,
            showPattern: true
          }
        }
      }, function () {
        Quagga.start()
        Quagga.onDetected((data) => (setCode(data.codeResult.code)))
      })
    }
  }, [activeScanner, init])

  const handleClickStart = () => {
    setInit(true)
    setActiveScanner(true)
  }
  const handleClickStop = () => {
    setActiveScanner(false)
    setInit(false)
    Quagga.stop()
    Quagga.offProcessed()
    Quagga.offDetected()
  }

  return (
    <div>
        <button onClick={() => handleClickStart(true)}>Start</button>
        <button onClick={() => handleClickStop(false)}>Stop</button>
        <h2>Code: {code}</h2>
        <div id='scanner-container'>
        </div>
    </div>
  )
}
