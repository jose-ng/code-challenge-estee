import React, { useEffect } from "react";
import { getTrucks } from "../services/trucks.service";

function Dashboard() {
  useEffect(() => {
    getTrucks().then((data) => {
      console.log(data);
    });
  }, []);

  return <div>Dashboard</div>;
}

export { Dashboard };
