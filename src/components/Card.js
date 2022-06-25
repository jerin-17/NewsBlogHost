import React from "react";

// eslint-disable-next-line no-unused-vars
const Card = ({ title, image, desc }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{image}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
