import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";

export default function OrderDetail(state) {
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);
  // console.log("🚀 ~ file: order.jsx:10 ~ Order ~ bookData:", bookData);
  console.log("ORDER");
  const DATA = useLocation();
  console.log("location", DATA.state);
  const orderData = DATA.state && DATA.state.data;
  console.log("🚀 ~ file: order.jsx:13 ~ Order ~ order", orderData);
  console.log(
    "🚀 ~ file: order.jsx:14 ~ Order ~ pickupLocation",
    orderData.pickupLocation
  );

  const handleTrack = (orderId) => {
    // Navigate to /map with the orderId as a query parameter
    console.log("order ID  in search list", orderId);
    navigate(`/map?orderId=${orderId}`, { state: { orderId } });
  };

  const handleDelete = async (orderId) => {
    try {
      // Send Axios DELETE request to delete order by ID
      const response = await axios.delete(`/order/${orderId}`);

      // Handle successful deletion
      console.log("Order deleted successfully:", response.data);
      // Update UI or take any other necessary action
      navigate("/pendingOrders", { replace: true });
    } catch (error) {
      // Handle error
      console.error("Failed to delete order:", error);
      // Update UI or take any other necessary action
    }
  };

  // Function to handle book now
  const handleBookNow = () => {
    // Navigate to "/book" route with the orderId as a parameter
    navigate(`/book`, { replace: true });
  };
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
          onClick={() => {
            {
              if (orderData.orderStatus.toLowerCase() === "pending") {
                navigate("/pendingOrders", { replace: true });
              } else if (orderData.orderStatus.toLowerCase() === "ongoing") {
                navigate("/track", { replace: true });
              } else {
                navigate("/previousOrders", { replace: true });
              }
            }
          }}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="font-semibold"> Order ID : {orderData._id}</p>
      </div>
      <div className="relative -top-16 ">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-4 rounded-lg">
            <div className="mb-4">
              <p className="flex flex-row gap-2 text-sm font-medium">
                📍 {orderData.pickupLocation}
              </p>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
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
                🏁 {orderData.dropoffLocation}
              </p>
            </div>
            <div className="">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="flex flex-col mt-1 mb-1 ">
              <div>
                <p className="text-gray-700 mt-2 mb-2 text-sm dark:text-gray-400">
                  🚍 {orderData.vehicalSize + " ft"} :{" "}
                  {orderData.vehicalBodyType + " Body"}
                </p>
                <p className="flex flex-row mt-2 mb-2  gap-2 text-sm font-medium">
                  📦 {orderData.goodsType}
                </p>
                <p className="flex flex-row mt-2 mb-2  gap-2 text-sm font-medium">
                  ⚖ {orderData.goodsWeight}
                </p>
                <p className="text-gray-700 mt-2 mb-2  text-sm font-medium dark:text-gray-400">
                  📏{orderData.goodsSize}
                </p>
              </div>
            </div>
            <div className="mb-2">
              <img src={line} alt="alt : line"></img>
            </div>

            <div>
              <p className="text-gray-700 text-sm mt-2 mb-3 font-semibold dark:text-gray-400">
                ☂ Cargo Insurance Status :{" "}
                {orderData.isCargoInsured ? "Insured" : "Not Insured"}
              </p>
              <div className="mb-2">
                <img src={line} alt="alt : line"></img>
              </div>
            </div>

            <div className="flex flex-row gap-5 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-semibold mb-2">
                  🛣 Distance : {orderData.distance ? orderData.distance : "0"}{" "}
                  km
                </p>
                <div className="flex flex-row gap-2 text-sm font-semibold mb-2">
                  <p>🕰 Estimated Date : {orderData.dateForPickup}</p>
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
              <div className="mx-3 text-sm">
                <p className="font-semibold ">Mode : {orderData.paymentMode}</p>
                <p className="font-semibold ">Via : {orderData.paymentVia}</p>
                <p className="font-semibold ">
                  Status : {orderData.paymentStatus}
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="mx-1">
              <p>
                <span className="font-semibold">Order</span>{" "}
              </p>
              <div className="mx-3 text-sm">
                <p className="font-semibold ">
                  Status : {orderData.orderStatus}
                </p>
                <p className="font-semibold">Date : {orderData.orderDate}</p>
                <p className="font-semibold">Time : {orderData.orderTime}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {orderData.orderStatus === "Pending" && (
              <button
                className="btn btn-wide mt-6 bg-blue hover:bg-blue"
                onClick={(e) => {
                  handleDelete(orderData._id); // Call handleDelete function for pending orders
                }}
              >
                Delete Order
              </button>
            )}
            {orderData.orderStatus === "Ongoing" && (
              <button
                className="btn btn-wide mt-6 bg-blue hover:bg-blue"
                onClick={(e) => {
                  handleTrack(orderData._id); // Call handleTrack function for ongoing orders
                }}
              >
                Track Cargo
              </button>
            )}
            {orderData.orderStatus === "Completed" && (
              <button
                className="btn btn-wide mt-6 bg-blue hover:bg-blue"
                onClick={(e) => {
                  handleBookNow(); // Call handleBookNow function for completed orders
                }}
              >
                Request New Transit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
