import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const jsonUrl = "http://localhost:6001/plants/";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(jsonUrl)
      .then(res => res.json())
      .then(plants => setPlants(plants))
  }, []);

  function onSubmit(formData) {
    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(plant => {
        setPlants([...plants, plant])
      });
  }

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
