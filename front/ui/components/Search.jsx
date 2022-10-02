import { useState, React } from 'react'
import Image from 'next/image'
import { LISTBOOK } from '../../config/mock/mock'
import { useRouter } from 'next/router'

export default function Search () {
  function keyControl (event, value, router) {
    if (event.key === 'Enter' || event.type === 'click') {
      navigateTo(router, value)
    }
  }
  function navigateTo (router, value) {
    if (router.pathname === '/') {
      // If it's from the index, it'll go to bookList
      router.push('/searchbooklist?id=' + value)
    }
  }
  const { image } = LISTBOOK
  const [value, setValue] = useState('')
  const router = useRouter()
  return (
    <div className="buscar">
      <input value={value}
      onChange={e => { setValue(e.currentTarget.value) }}
      onKeyUp={(event) => { keyControl(event, value, router) } } type="text" name ="buscador" className="buscar-autor" id="name" placeholder="Buscador de Libro" />
      <div className="lupa">
        <button onClick={(event) => { keyControl(event, value, router) } } >  <Image src={image} width={20} height={20} tabIndex={10} /></button>
      </div>
    </div>
  )
}
