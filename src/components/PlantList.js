import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete }) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard plant={plant} key={plant.id} onDelete={onDelete} />)}
    </ul>
  );
}

export default PlantList;
