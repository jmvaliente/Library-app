import React from "react";
import Image from "next/image";
import { LISTBOOK } from "../../config/mock/mock";

export default function Search () {
  const { image } = LISTBOOK;
  return (
    <div className="buscar">
      <input type="text" className="buscar-autor" id=""placeholder="Buscador de Libro"/>
      <div className="lupa">
        <button> <Image src={image} width={20} height={20} tabIndex={10} /></button>
      </div>
    </div>
  );
}