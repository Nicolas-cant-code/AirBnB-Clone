import "./Card.css";
import React from "react";

const Card = ({ src, title, discription, price }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{discription}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
