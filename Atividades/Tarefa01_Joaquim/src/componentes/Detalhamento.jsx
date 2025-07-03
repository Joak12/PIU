import React from "react";
import "./Detalhamento.css";

export default function Detalhamento({ card, onClose }) {
  if (!card) return null; // Não renderiza nada se não houver card selecionado

  return (
    <div className="detalhamento-overlay">
      <div className="detalhamento-container">
        <button className="fechar-btn" onClick={onClose}>X</button>
        <img src={card.imageUrl} alt={card.title} className="detalhamento-imagem" />
        <h2>{card.title}</h2>
        <p>{card.detalhe}</p>
      </div>
    </div>
  );
}
