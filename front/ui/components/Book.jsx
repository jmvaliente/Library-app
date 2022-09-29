import React from 'react'
import Image from 'next/image'
import { BOOK_DETAIL_MOOK } from '../../config/mock/mock'

export default function Book ({ children }) {
  const { title, publishedDate, publisher, authors, pageCount, industryIdentifiers, imageLinks, description, categories } = children.book.volumeInfo
  const [isbn10] = industryIdentifiers
  const { identifier } = isbn10
  const { thumbnail } = imageLinks
  const [AuthorPrincipal] = authors
  const [categoriesTest] = categories
  const test = categoriesTest.replace(/\s/g, '').split(/[/&]/g)
  return (
        <div className="mx-auto shadow-xl rounded-xl overflow-hidden border-2 border-slate-800 m-2 max-w-xl p-4">
            <div className="flex">
                <div className="flex-1 w-50">
                    <Image src={thumbnail} height={BOOK_DETAIL_MOOK.height } width={BOOK_DETAIL_MOOK.width}/>
                </div>
                <div className="flex-1 w-50 grid grid-cols-1 content-arround text-gray-700">
                    <div>
                        <h2 className="font-bold text-xl ">{title}</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="font text-sm">Año: <span className="font-bold">{publishedDate}</span></li>
                            <li className="font text-sm">Editorial: <span className="font-bold">{publisher}</span></li>
                            <li className="font text-sm">Autor: <span className="font-bold">{AuthorPrincipal}</span></li>
                            <li className="font text-sm">Nº paginas: <span className="font-bold">{pageCount}</span></li>
                            <li className="font text-sm">ISBN: <span className="font-bold">{identifier}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex pt-4">
                <div className="flex-1 w-50">
                    4 Stars
                </div>
                <section className="flex-1 w-50 text-right">
                    <p>
                        {test.map((genre, index) => (
                            <span
                                className="text-gray-700 border-l-2 mr-3 border-slate-800 pl-1"
                                key={index}
                            >
                                {genre}
                            </span>
                        ))}
                    </p>
                </section>
            </div>
            <div className="pt-6">
                <p className="font text-sl text-gray-700">{description}
                </p>
            </div>
        </div>
  )
}
