import React from 'react'
import Image from 'next/image'
import { LISTBOOK } from '../../config/mock/mock'

export default function Search () {
  const { image } = LISTBOOK
  return (
    <div className="flex gap-4">
      <input type="text" className="bg-slate-300 text-white rounded-full pl-6 w-full placeholder:text-white focus:outline-slate-400" placeholder="Buscador de Libro" />
      <Image
              loading="lazy"
              className=''
              alt="Lupa"
              src={image}
              width={40}
              height={40}
            />
    </div>
  )
}
