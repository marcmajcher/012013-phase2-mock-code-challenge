import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {

  const [inStock, setInStock] = useState(true);

  function handleClick(e) {
    setInStock(() => !inStock)
  }

  function handleDelete(e) {
    onDelete(plant);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <span>
        {inStock ? (
          <button className="primary" onClick={handleClick}>In Stock</button>
        ) : (
          <button onClick={handleClick}>Out of Stock</button>
        )}
        <button className="delete" onClick={handleDelete}>Delete Plant</button>
      </span>
      
    </li>
  );
}

export default PlantCard;
