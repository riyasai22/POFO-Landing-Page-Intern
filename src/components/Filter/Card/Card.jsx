import "./Card.css";
import React from 'react'

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={item.image} alt="portfolio" />
      </div>
      <div className="card-desc">
        <h4>{item.title}</h4>
        <h5>{item.category}</h5>
      </div>
    </div>
  );
};

export default Card;
