import React from "react";
import "./GameCard.css";

const Card = ({ title, description, image, onRegister, onRuleBook, prizePool, winnerPrize, runnerUpPrize }) => {
  return (
    <div className="card-item">
      <div className="card-item-img-shadow">
        <img src={image} alt={title} />
      </div>

      <div className="card-item-content">
        <h2>{title}</h2>
        <p>{description}</p>

        {/* Prize Info Section */}
        {prizePool && (
          <div className="card-prize-section">
            <div className="card-prize-pool">
              <span className="card-prize-pool-label">PRIZE POOL</span>
              <span className="card-prize-pool-value">{prizePool}Rs</span>
            </div>
            <div className="card-prize-breakdown">
              <div className="card-prize-item card-prize-winner">
                <span className="card-prize-icon">🏆</span>
                <span className="card-prize-label">Winner</span>
                <span className="card-prize-value">{winnerPrize}Rs</span>
              </div>
              <div className="card-prize-item card-prize-runner">
                <span className="card-prize-icon">🥈</span>
                <span className="card-prize-label">Runner Up</span>
                <span className="card-prize-value">{runnerUpPrize}Rs</span>
              </div>
            </div>
          </div>
        )}

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
