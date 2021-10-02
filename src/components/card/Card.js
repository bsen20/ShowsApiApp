import React from "react";
import "./card.css";
const Card = ({ image, name, rating, bc }) => {
  return (
    <div className="main-card">
      <p className="rating" style={{ backgroundColor: bc }}>
        {rating ? rating : 5.5}
      </p>
      <div className="card">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
