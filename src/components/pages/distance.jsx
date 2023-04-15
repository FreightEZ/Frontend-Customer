import React, { useState } from "react";

const DistanceCalculator = () => {
  const [pickupLocation, setCity1] = useState("");
  const [dropoffLocation, setCity2] = useState("");
  const [distanceKm, setDistanceKm] = useState(null);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City 1"
        value={pickupLocation}
        onChange={(e) => setCity1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter City 2"
        value={dropoffLocation}
        onChange={(e) => setCity2(e.target.value)}
      />
      <button onClick={calculateDistance}>Calculate Distance</button>
      {distanceKm && <p>Distance: {distanceKm} km</p>}
    </div>
  );
};

export default DistanceCalculator;
