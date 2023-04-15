import React, { useEffect, useState } from "react";
import ScrollPassedCity from "./scrollPassedCity";
import PassedCity from "./passedCity";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const CurrentLocationMap = ({ details }) => {
  const location = useLocation();
  const orderId = location.state && location.state.orderId;
  console.log(orderId);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [passedCities, setPassedCities] = useState(details);
  const navigate = useNavigate();
  useEffect(() => {
    // Function to detect current location
    const detectCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // On successful location detection
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ latitude, longitude });
          },
          (error) => {
            // On location detection error
            console.error("Error detecting current location:", error);
          }
        );
      } else {
        // If geolocation is not supported
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Call the function to detect current location
    detectCurrentLocation();
  }, []);

  useEffect(() => {
    // Function to initialize Google Maps
    const initMap = () => {
      const { latitude, longitude } = currentLocation;
      const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: 11,
      };
      const map = new window.google.maps.Map(
        document.getElementById("map-container"),
        mapOptions
      );
      // Create a truck icon for the marker
      const truckIcon = {
        url: "https://maps.google.com/mapfiles/kml/shapes/truck.png",
        scaledSize: new window.google.maps.Size(40, 40),
      };

      // Create the marker with the truck icon
      const marker = new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Current Location",
        icon: truckIcon,
      });
    };

    // Initialize Google Maps after current location is obtained
    if (currentLocation) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA5EDWX1Zp99tW6cnklYp4vDUURgbZVA6o&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;
      document.head.appendChild(script);
    }
  }, [currentLocation]);

  return (
    <div className="w-96">
      {/* <div className="flex justif */}
      <div className="flex max-w-screen justify-start items-center max-w-sm h-20 px-4 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={(e) => {
            navigate("/track");
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p className="font-semibold text-sm"> Tracking Order ID : {orderId} </p>
      </div>
      <div className="flex items-end justify-center">
        {currentLocation ? (
          <>
            <div>
              <div id="map-container" className=" h-96 w-screen"></div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <p>Loading current location...</p>
          </div>
        )}
      </div>
      <div className="flex flex-col m-5">
        <p className="font-semibold text-lg ">Last city Crossed</p>
        <div className="p-2">
          {passedCities.length > 0 ? (
            <div>
              <ScrollPassedCity>
                <PassedCity city={passedCities} />
              </ScrollPassedCity>
            </div>
          ) : (
            <p>No cities passed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentLocationMap;
