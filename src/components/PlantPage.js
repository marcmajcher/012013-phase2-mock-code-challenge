import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const jsonUrl = "http://localhost:6001/plants/";

function PlantPage() {
  
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

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
  };

  function onDelete(plant) {
    fetch(jsonUrl+plant.id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(setPlants(plants.filter(currentPlant => currentPlant.id !== plant.id)))
  };

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList 
        plants={plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))}
        onDelete={onDelete}
      />
    </main>
  );
}

export default PlantPage;
