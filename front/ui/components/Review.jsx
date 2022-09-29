import React from 'react'
import { REVIEW_MOCK } from '../../config/mock/mock'
import Image from 'next/image'

export default function Review () {
  const { image, genres, textLiked, textRecommended, keywords, author, editorial } = REVIEW_MOCK
  return (
        <article className="mx-auto shadow-xl rounded-xl overflow-hidden border-2 border-slate-800 m-2 max-w-xl p-4">

          <section className='mb-2'>
              <div className="flex">
                  <div className="flex-1   text-center">
                      <div className="pt-5">
                          <h4 className="font-bold text-2xl ">Mi Valoracion:</h4>
                          <p>estrellas</p>
                      </div>
                  </div>
                  <div className="flex-1   text-lg">
                      <div className="flex pt-4">
                          <div className="flex-1 w-50">
                              <h3 className="font-bold text-lg">Editorial:{editorial} </h3>
                          </div>
                      </div>
                      <div className="flex pt-4">
                          <div className="flex-1 w-50">
                              <h3 className="font-bold text-lg">Autor:  {author}</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

            <section className="mb-2 pt-3 text-right">
                <p>
                    {genres.map((genre, index) => (
                        <span
                            className="text-gray-700 border-l-2 mr-3 border-slate-800 pl-1"
                            key={index}
                        >
                            {genre}
                        </span>
                    ))}
                </p>
            </section>

            <section className="mb-2">
                <h3 className="font-bold text-lg">Lo que más me gustó:</h3>
                <p className="text-gray-700">{textLiked}</p>
            </section>

            <section className="mb-2">
                <h3 className="font-bold text-lg">Por que lo recomendarías:</h3>
                <p className="text-gray-700">{textRecommended}</p>
            </section>

          <section className="mb-6">
              <div className="flex ">
                  <div className="flex-1   text-left">
                      <h3 className="font-bold text-lg">Palabras clave:</h3>
                      <p>
                          {keywords.map((keys, index) => (
                              <span
                                  className="text-gray-700  mr-3  pl-1"
                                  key={index}
                              >
                                  {keys}
                              </span>
                          ))}
                      </p>
                  </div>
                  <div className="flex-1 w-50">
                      <section className="mb-6">
                          <div className="flex flex-col justify-items-center items-center">
                              <Image
                                  loading="lazy"
                                  className="object-cover object-center border-2"
                                  alt="Autor"
                                  src={image}
                                  width={150}
                                  height={150}
                              />
                          </div>
                      </section>
                  </div>
              </div>
          </section>

        </article>
  )
}
