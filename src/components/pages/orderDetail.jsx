import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";

export default function OrderDetail() {
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);
  console.log("🚀 ~ file: order.jsx:10 ~ Order ~ bookData:", bookData);
  console.log("ORDER");

  function handleclick(e) {
    console.log("clicked");
    navigate("/map");
  }

  function handleBackclick(e) {
    navigate("/track");
  }
  return (
    <>
      <div className="relative flex max-w-screen bg-white -top-14 items-center rounded-t-2xl p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={handleBackclick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="font-semibold"> Order ID</p>
      </div>
      <div className="relative -top-16 ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-lg">
            <div className="mb-4">
              <p className="flex flex-row gap-2 text-sm font-medium">
                📍 {bookData.pickupLocation}
              </p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  med
                  class="w-6 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                  />
                </svg>
              </div>
              <p className="flex flex-row gap-2 text-sm font-medium">
                🏁 {bookData.dropoffLocation}
              </p>
            </div>
            <div className="">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="flex flex-col mt-1 mb-1 ">
              <div>
                <p className="text-gray-700 mt-2 mb-2 text-sm dark:text-gray-400">
                  🚍 {bookData.vehicalSize + " ft"} :{" "}
                  {bookData.bodyType + " Body"}
                </p>
                <p className="flex flex-row mt-2 mb-2  gap-2 text-sm font-medium">
                  📦 {bookData.materialDetail}
                </p>
                <p className="flex flex-row mt-2 mb-2  gap-2 text-sm font-medium">
                  ⚖ {bookData.weight}
                </p>
                <p className="text-gray-700 mt-2 mb-2  text-sm font-medium dark:text-gray-400">
                  📏{bookData.size}
                </p>
              </div>
            </div>
            <div className="mb-2">
              <img src={line} alt="alt : line"></img>
            </div>

            <div>
              <p className="text-gray-700 text-sm mt-2 mb-3 font-semibold dark:text-gray-400">
                ☂ ₹ 2,000 Any type of material.
              </p>
              <div className="mb-2">
                <img src={line} alt="alt : line"></img>
              </div>
            </div>

            <div className="flex flex-row gap-5 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-semibold mb-2">
                  🛣 Distance : {bookData.distance ? bookData.distance : "0"} km
                </p>
                <div className="flex flex-row gap-2 text-sm font-semibold mb-2">
                  <p>🕰 Estimated Date :</p>
                  <p>{bookData.dateForPickup}</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="mx-1">
              <p>
                <span className="font-semibold">Payment</span>{" "}
              </p>
              <div className="mx-3">
                <p className="font-semibold ">Mode :</p>
                <p className="font-semibold ">Via :</p>
                <p className="font-semibold ">Status :</p>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="mx-1">
              <p>
                <span className="font-semibold">Order</span>{" "}
              </p>
              <div className="mx-3">
                <p className="font-semibold ">Status :</p>
                <p className="font-semibold">Date :</p>
                <p className="font-semibold">Time :</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="btn btn-wide mt-6 bg-blue hover:bg-blue"
              onClick={handleclick}
            >
              Track Cargo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
