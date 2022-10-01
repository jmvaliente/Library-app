import { useState, React } from 'react'
import Image from 'next/image'
import { LISTBOOK } from '../../config/mock/mock'
import { useRouter } from 'next/router'

function checkAnswer (event, value, router) {
  if (event.key === 'Enter' || event.type === 'click') {
    naviteTo(router, value)
  }
}
function naviteTo (router, value) {
  if (router.pathname === '/') {
    //Si es desde el inicio, irá al bookList
    router.push('/searchbooklist?id=' + value)
  }
}

export default function Search () {
  const { image } = LISTBOOK
  const [value, setValue] = useState('')
  const router = useRouter()
  return (
    <div className="buscar">
      <input value={value}
      onChange={e => { setValue(e.currentTarget.value) }}
      onKeyUp={(event) => { checkAnswer(event, value, router) } } type="text" name ="buscador" className="buscar-autor" id="name" placeholder="Buscador de Libro" />
      <div className="lupa">
        <button onClick={(event) => { checkAnswer(event, value, router) } } >  <Image src={image} width={20} height={20} tabIndex={10} /></button>
      </div>
    </div>
  )
}
