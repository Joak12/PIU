import React from "react";
import "./Card.css";

export default function Card({ imageUrl, title }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}
