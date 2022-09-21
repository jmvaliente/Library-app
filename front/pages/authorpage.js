import React from "react";
import Author from "../ui/components/Author";

const AUTHOR_MOCK = {
  id: "001",
  name: "Isaac Asimov",
  image: "/../public/isaac-asimov.jpg",
  born: "2/01/1920",
  died: "6/04/1992",
  nationalities: ["Ruso", "Soviético", "Americano"],
  genres: ["Ciencia ficción", "Misterio", "Ciencia popular"],
  resume:
    "Isaac Asimov fue un escritor y profesor de bioquímica en la facultad de medicina de la universidad de Boston de origen ruso, nacionalizado estadounidense, conocido por ser un prolífico autor de obras de ciencia ficción, historia y divulgación científica",
  books: [
    "Fundación",
    "Fundación e imperio",
    "Segunda fundación",
    "Viaje alucinante",
    "Yo, robot",
    "Viaje alucinante 2: Destino cerebro",
  ],
};

export default function authorPage() {
  return <div className="p-4 md:32 lg:48">{Author(AUTHOR_MOCK)}</div>;
}
