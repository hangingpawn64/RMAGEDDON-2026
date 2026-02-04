import React from "react";
import "./GameCard.css";

const Card = ({ title, description, image, onRegister, onRuleBook }) => {
  return (
    <div className="card-item">
      <div className="card-item-img-shadow">
        <img src={image} alt={title} />
      </div>

      <div className="card-item-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="card-item-button-shadow">
          <div className="card-item-button" onClick={onRegister}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Register
          </div>
          <div className="card-item-button" onClick={onRuleBook}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Rule Book
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
