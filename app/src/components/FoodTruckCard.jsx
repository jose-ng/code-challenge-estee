// eslint-disable-next-line react/prop-types
function FoodTruckCard({ foodTruck }) {
  return (
    <div className="food-truck-card">
      <h2>{foodTruck.applicant}</h2>
      <p>{foodTruck.fooditems}</p>
      <p>
        <strong>Location:</strong> {foodTruck.address}
      </p>
    </div>
  );
}

export { FoodTruckCard };
