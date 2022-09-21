import Image from 'next/image'
import { BOOK_DETAIL_MOOK } from '../../config/mock/mock'

export default function Book () {
  return (
        <div className="p-6">
            <div className="flex">
                <div className="flex-1 w-50">
                    <Image src={BOOK_DETAIL_MOOK.image} height={BOOK_DETAIL_MOOK.height } width={BOOK_DETAIL_MOOK.width}/>
                </div>
                <div className="flex-1 w-50 grid grid-cols-1 content-arround">
                    <div>
                        <h2 className="font-bold text-xl">{BOOK_DETAIL_MOOK.title}</h2>
                    </div>
                    <div>
                        <ul>
                            <li className="font text-sm">Año: <span className="font-bold">{BOOK_DETAIL_MOOK.year}</span></li>
                            <li className="font text-sm">Editorial: <span className="font-bold">{BOOK_DETAIL_MOOK.editorial}</span></li>
                            <li className="font text-sm">Autor: <span className="font-bold">{BOOK_DETAIL_MOOK.author}</span></li>
                            <li className="font text-sm">Nº paginas: <span className="font-bold">{BOOK_DETAIL_MOOK.pages}</span></li>
                            <li className="font text-sm">ISBN: <span className="font-bold">{BOOK_DETAIL_MOOK.isbn}</span></li>
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
                        {BOOK_DETAIL_MOOK.genres.map((genre, index) => (
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
                <p className="font text-sm">{BOOK_DETAIL_MOOK.sinopsis}
                </p>
            </div>
        </div>
  )
}
