import { useEffect, useState } from "react";
import { getTrucks } from "../services/trucks.service";
import { FoodTruckCard } from "./FoodTruckCard";

function Dashboard() {
  const [foodTruck, setFoodTruck] = useState(null);
  const [randomSearch, setRandomSearch] = useState(1);

  const getRandomOffset = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    return randomNumber * 100;
  };

  useEffect(() => {
    const offset = getRandomOffset();
    getTrucks(offset).then((rawData) => {
      const data = offset % 2 === 0 ? rawData.reverse() : rawData;
      setFoodTruck(data[0]);
    });
  }, [randomSearch]);

  const fetchRandomFoodTruck = () => {
    setRandomSearch(randomSearch * -1);
  };

  return (
    <div className="container-card">
      {foodTruck ? <FoodTruckCard foodTruck={foodTruck} /> : <p>Loading...</p>}
      <button className="randomize-button" onClick={fetchRandomFoodTruck}>
        Find Another Food Truck
      </button>
    </div>
  );
}

export { Dashboard };
