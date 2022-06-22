import React from "react";
import "./ClientCard.css";
const ClientCard = ({ item }) => {
  return (
    <div className="client-card">
      <div className="card-wrapper">
        <div className="client-img">
          <img src={item.image} alt="" />
        </div>
        <p className="desc">{item.words}</p>
        <p className="caption">{item.name}</p>
        <p className="desc desc-small">{item.designation}</p>
      </div>
    </div>
  );
};

export default ClientCard;
