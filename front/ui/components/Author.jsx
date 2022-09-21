import React from "react";
import Image from "next/image";

export default function Author({id, name, image, born, died,nationalities,genres,resume,books}) {
  return (
      <article className="mx-auto shadow-xl rounded-xl overflow-hidden border-2 border-slate-800 m-2 max-w-md p-6">
        <h2>Ficha de Autor</h2>
        <section className=" mb-6">
          <div className="flex flex-col justify-items-center items-center">
            <Image
              loading="lazy"
              className="rounded-full object-cover object-center"
              alt="Autor"
              src={image}
              width={200}
              height={200}
            />
            <h2 className="font-bold text-2xl mt-3">{name}</h2>
            <time className="text-gray-700">
              {born}-{died}
            </time>
          </div>
        </section>

        <section className="mb-2">
          <h3 className="font-bold text-lg">Géneros</h3>
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
          <h3 className="font-bold text-lg">Nacionalidad</h3>
          <ul>
            {nationalities.map((nationality, index) => (
              <li className="text-gray-700" key={index}>
                {nationality}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-2">
          <h3 className="font-bold text-lg">Vida</h3>
          <p className="text-gray-700">{resume}</p>
        </section>

        <section className="mb-2">
          <h3 className="font-bold text-lg">Bibliografía</h3>
          <ul>
            {books.map((book, index) => (
              <li className="text-gray-700" key={index}>
                {book}
              </li>
            ))}
          </ul>
        </section>
      </article>
  );
}
