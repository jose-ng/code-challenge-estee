import { useEffect, useState } from "react";
import { getTrucks } from "../services/trucks.service";
import { FoodTruckCard } from "./FoodTruckCard";

function Dashboard() {
  const [foodTruck, setFoodTruck] = useState(null);
  const [randomSearch, setRandomSearch] = useState(1);
  useEffect(() => {
    getTrucks().then((data) => {
      setFoodTruck(data[0]);
    });
  }, [randomSearch]);

  const fetchRandomFoodTruck = async () => {
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
