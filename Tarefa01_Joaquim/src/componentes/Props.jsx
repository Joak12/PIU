import React, { useState } from "react";
import Card from "./Card";
import Detalhamento from "./Detalhamento";
import "./Props.css";

import Aquaman from "../assets/aquaman.jpg"


export default function Props() {
  const cards = [
    {
      id: 1,
      imageUrl: "../assets/superman.jpg",
      title: "Superman",
      detalhe: "Superman ou Super-Homem é um super-herói de histórias em quadrinhos publicadas pela DC Comics."
    },
    {
      id: 2,
      imageUrl: "../assets/mm.jpg",
      title: "Mulher Maravilha",
      detalhe: "Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics."
    },
    {
      id: 3,
      imageUrl: "../assets/arrow.jpg",
      title: "Arqueiro Verde",
      detalhe: "Arqueiro Verde, alter-ego de Oliver Jonas Queen, é um personagem de história em quadrinhos do Universo DC"
    },
    {
      id: 4,
      imageUrl: "../assets/aquaman.jpg",
      title: "Aquaman",
      detalhe: "Aquaman é um filme de super-herói estadunidense de 2018, baseado no personagem homônimo da DC Comics"
    },
    {
      id: 5,
      imageUrl: "../assets/flash.jpg",
      title: "Flash",
      detalhe: "Flash é um nome compartilhado por diversos super-heróis da DC Comics."
    },
    {
      id: 6,
      imageUrl: "../assets/batman.jpg",
      title: "Batman",
      detalhe: "Batman é um personagem fictício e super-herói da editora norte-americana DC Comics."
    },
  ];
  

  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const cardSelecionado = cards.find(card => card.id === imagemSelecionada);

  return (
    <div className="flex flex-col items-center">
      <div className="cards flex justify-center gap-6 flex-wrap">
        {cards.map((card) => (
          <div key={card.id} onClick={() => setImagemSelecionada(card.id)} className="cursor-pointer">
            <Card imageUrl={card.imageUrl} title={card.title} />
          </div>
        ))}
      </div>
      <Detalhamento card={cardSelecionado} onClose={() => setImagemSelecionada(null)} />
    </div>
  );
}