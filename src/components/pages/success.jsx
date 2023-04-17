import React, { useState, useEffect, Redirect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import sucessGif from "../../assets/images/successGif.svg";

export default function Success() {
  const navigate = useNavigate();
  const handleToBook = () => {
    navigate("/book");
  };

  return (
    <div className="absolute top-0  bg-white">
      <div className="flex flex-col mt-40 items-center justify-center">
        <img
          className="animate-bounce"
          src={sucessGif}
          alt="alt : sucessGif"
        ></img>
        <div className="text-center p-5">
          <p className="text-lg font-semibold text-gray-900">
            Your request for cargo transit is being shared with all registered
            drivers in your area.
          </p>
          <p className="mt-2 text-gray-600">
            Please wait while we search for available drivers to fulfill your
            request.
          </p>
          <p className="mt-2 text-gray-600">Thank you for your patience!</p>
        </div>
        <button
          className="btn btn-wide mt-6 bg-blue hover:bg-blue"
          onClick={
            () => handleToBook() // Call handleBookNow function for completed orders
          }
        >
          Request New Transit
        </button>
      </div>
    </div>
  );
}
