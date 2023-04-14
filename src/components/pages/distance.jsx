import React, { useState, useEffect } from "react";

const DistanceCalculator = () => {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [distance, setDistance] = useState("");

  useEffect(() => {
    if (city1 !== "" && city2 !== "") {
      calculateDistance();
    }
  }, [city1, city2]);

  const calculateDistance = () => {
    // Make API call to Google's Distance Matrix API to compute distance between city1 and city2
    // Replace 'YOUR_API_KEY' with your actual API key
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${city1}&destinations=${city2}&key=AIzaSyA5EDWX1Zp99tW6cnklYp4vDUURgbZVA6o`
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract distance from the API response
        const distanceValue = data.rows[0].elements[0].distance.value;
        const distanceText = data.rows[0].elements[0].distance.text;
        setDistance(
          `Distance between ${city1} and ${city2}: ${distanceValue} meters (${distanceText})`
        );
      })
      .catch((error) => {
        console.error("Error calculating distance:", error);
        setDistance("Error calculating distance. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <h1 className="text-2xl font-bold mb-4">Distance Calculator</h1>
        <input
          type="text"
          placeholder="City 1"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          className="w-full p-2 mb-4 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />
        <input
          type="text"
          placeholder="City 2"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          className="w-full p-2 mb-4 border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        />
        <button
          onClick={calculateDistance}
          className="w-full bg-blue text-white py-2 px-4 rounded hover:bg-blue transition duration-300"
        >
          Calculate Distance
        </button>
        <p className="mt-4">{distance}</p>
      </div>
    </div>
  );
};

export default DistanceCalculator;
