import React from 'react'
import Image from 'next/image'
import { BOOK_DETAIL_MOOK } from '../../config/mock/mock'

export default function Book () {
  return (
        <div className="mx-auto shadow-xl rounded-xl overflow-hidden border-2 border-slate-800 m-2 max-w-xl p-4">
            <div className="flex">
                <div className="flex-1 w-20 pr-2">
                    <Image src={BOOK_DETAIL_MOOK.image} height={BOOK_DETAIL_MOOK.height} width={BOOK_DETAIL_MOOK.width}/>
                    <div className="text-gray-700 text-sm">
                        <h3>{BOOK_DETAIL_MOOK.author}</h3>
                    </div>
                    <div className="flex flex-wrap pt-1">
                        {BOOK_DETAIL_MOOK.genres.map((genre, index) => (
                            <span className="text-gray-700 border-l-2 mr-3 border-slate-800 text-sm pl-1" key={index}>
                                {genre}
                            </span>
                        ))}
                    </div>
                    <div className="pt-1">
                        <p>4 Stars</p>
                    </div>
                </div>
                <div className="pr-2 w-auto flex-1 grid grid-cols-1 text-gray-700">
                    <div>
                        <h2 className="font-bold text-xl">{BOOK_DETAIL_MOOK.title}</h2>

                        <p className="font text-sm pt-1">{BOOK_DETAIL_MOOK.resume}</p>
                    </div>

                </div>
            </div>
        </div>
  )
}
