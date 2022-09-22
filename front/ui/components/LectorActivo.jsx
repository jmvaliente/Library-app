import React from 'react'
import Image from 'next/image'

import { AUTHOR_MOCK, BOOK_DETAIL_MOOK } from '../../config/mock/mock'
export default function LectorActivo() {
    const { image, genres } = AUTHOR_MOCK
    const { title } = BOOK_DETAIL_MOOK
    return (
        <div className="mx-auto shadow-xl rounded-xl overflow-hidden border-2 border-slate-800 m-2 max-w-xl p-4">
            <div className="flex p-4">
                <div className="flex-1 w-50">
                    <section className="mb-6">
                        <div className="flex flex-col justify-items-center items-center">
                            <Image
                                loading="lazy"
                                className="rounded-full object-cover object-center border-2"
                                alt="Autor"
                                src={image}
                                width={150}
                                height={150}
                            />
                        </div>
                    </section>
                </div>
                <div className="flex-1   text-center">
                    <div className="pt-12">
                        <h1 className="font-bold text-2xl ">{title}</h1>
                        <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Mi perfil</button>
                    </div>
                </div>
            </div>
            <div className="flex pt-4">
                <section className="mb-2">
                    <h3 className="font-bold text-lg">Géneros Favoritos</h3>
                    <p>
                        {genres.map((genre, index) => (
                            <span
                                className="text-gray-700  mr-3  pl-1"
                                key={index}
                            >
                                {genre}
                            </span>
                        ))}
                    </p>
                </section>
            </div>


            <div className="flex pt-4">
                <div className="flex-1 w-50">
                    <h3 className="font-bold text-lg">Libro Favorito: </h3>
                </div>
                <section className="flex-1 w-50 text-center">
                    <p>
                        Señor de los anillos
                    </p>
                </section>
            </div>

            <div className="flex pt-4">
                <div className="flex-1 w-50">
                    <h3 className="font-bold text-lg">Autor Favorito: </h3>
                </div>
                <section className="flex-1 w-50 text-center">
                    <p>
                        Autor favorito
                    </p>
                </section>
            </div>

        </div>
    )
}
