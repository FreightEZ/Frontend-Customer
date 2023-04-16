import React, { useState, useEffect } from "react";
import axios from "axios";

const GoogleMapsDirections = () => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const fetchDirections = async () => {
      try {
        // Replace with your own Google Maps API key
        const API_KEY = "AIzaSyA5EDWX1Zp99tW6cnklYp4vDUURgbZVA6o";
        const origin = "surat";
        const destination = "mumbai";
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`;
        const response = await axios.get(url);
        const data = response.data;
        if (data.status === "OK") {
          const duration = data.routes[0].legs[0].duration.text;
          setDuration(duration);
        } else {
          console.error("Error:", data.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchDirections();
  }, []);

  return (
    <div>
      {duration ? (
        <p>Estimated travel time from City1 to City2: {duration}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GoogleMapsDirections;
