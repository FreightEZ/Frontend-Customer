import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Order() {
  const [isInsuranceAdded, setIsInsuranceAdded] = useState(false);
  const [paymentMode, setPaymentMode] = useState(""); // state to store the selected paymentMode
  const [paymentVia, setPaymentVia] = useState(""); // state to store the selected paymentMode
  const [paymentStatus, setPaymentStatus] = useState();
  const [orderDate, setOrderDate] = useState(""); // state to store the orderDate
  const [orderTime, setOrderTime] = useState(""); // state to store the orderTime
  const [orderStatus, setOrderStatus] = useState(""); // state to store the orderStatus
  const [isDone, setIsDone] = useState(false);
  const [isInsuranceAddedShow, setIsInsuranceAddedShow] = useState(false);
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("NA");
  // const [invTimer, setInvTimer] = useState(0);
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);
  console.log("🚀 ~ file: order.jsx:10 ~ Order ~ bookData:", bookData);
  console.log("ORDER");

  const handleCargoInsurance = () => {
    // Add logic here to handle the click event for adding cargo insurance
    // For example, you can update state variables, make API calls, or perform other actions
    // related to adding cargo insurance
    setIsInsuranceAdded(!isInsuranceAdded); // Set the isInsuranceAdded state variable to true to trigger the animation
    setIsInsuranceAddedShow(true);
    setTimeout(() => {
      setIsInsuranceAddedShow(false); // Set the isInsuranceAdded state variable back to false after a certain delay to stop the animation
    }, 1000);
  };

  console.log(isInsuranceAdded);

  const handleCheckboxChange = (event) => {
    // event handler for checkbox change
    const value = event.target.value; // get the value of the checkbox
    setPaymentMode(value); // update the state with the selected paymentMode

    // Uncheck all other checkboxes
    const checkboxes = document.querySelectorAll(
      "modeDiv",
      'input[type="checkbox"]'
    ); // get all checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox.value !== value) {
        checkbox.checked = false; // uncheck other checkboxes
      }
    });
  };

  const handleCheckboxChangeVia = (event) => {
    // event handler for checkbox change
    const value = event.target.value; // get the value of the checkbox
    setPaymentVia(value); // update the state with the selected paymentMode

    // Uncheck all other checkboxes
    const checkboxes = document.querySelectorAll(
      "viaDiv",
      'input[type="checkbox"]'
    ); // get all checkboxes
    checkboxes.forEach((checkbox) => {
      if (checkbox.value !== value) {
        checkbox.checked = false; // uncheck other checkboxes
      }
    });
  };

  function calculateDeliveryDate(
    pickupDate,
    distance,
    averageSpeed,
    contingencyTime
  ) {
    // Calculate transit time in hours
    const transitTimeHours = distance / averageSpeed;

    // Calculate estimated delivery date in milliseconds
    const estimatedDeliveryDateMillis =
      new Date(pickupDate).getTime() + transitTimeHours * 60 * 60 * 1000; // Convert hours to milliseconds

    // Add contingency time to estimated delivery date
    const estimatedDeliveryDateWithContingency = new Date(
      estimatedDeliveryDateMillis + contingencyTime * 60 * 60 * 1000
    ); // Convert hours to milliseconds

    return estimatedDeliveryDateWithContingency;
  }

  useEffect(() => {
    setPaymentStatus("Pending");
    setOrderDate(moment().format("YYYY-MM-DD"));
    setOrderTime(moment().format("hh:mm:ss"));
    setOrderStatus("Pending");
    // const val = calculateDeliveryDate(
    //   bookData.dateForPickup,
    //   bookData.distanceKm,
    //   70,
    //   84600000
    // );
    // setExpectedDeliveryDate(val);
    // console.log("Expected Delivery Date : ", val);
  }, []);

  const handleLearnMore = () => {
    navigate("/insurance");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("OK");
    try {
      console.log("OK1");
      // Send POST request to /register endpoint with form data
      const response = await axios.post("/orderDetails", {
        ...bookData,
        isInsuranceAdded: isInsuranceAdded,
        paymentMode: paymentMode,
        paymentVia: paymentVia,
        paymentStatus: paymentStatus,
        orderDate: orderDate,
        orderTime: orderTime,
        orderStatus: orderStatus,
      });

      console.log("OK2");
      // Handle successful response
      if (response.status == 201) {
        console.log("OK3");
        toast.success("Order placed Succesfully", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        await new Promise((r) => setTimeout(r, 2000));
        // .then(
        // setInterval(() => {
        console.log("redir");
        navigate("/success");
        // }, 2000);
        // );
      } else {
        console.log("OK4");
        toast.error("Order not placed", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      // Do something with response data, e.g., redirect to another page
    } catch (error) {
      console.log("OK5");
      // Handle error
      toast.error(error, {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleBack = () => {
    navigate("/book");
  };

  console.log(bookData.pickupLocation);

  return (
    <div>
      <ToastContainer />
      <div className="relative flex max-w-sm bg-white -top-14 items-center rounded-t-2xl p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleBack()}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <p className="font-semibold"> Order Summary</p>
      </div>
      <div className="relative -top-16">
        <div className="flex flex-col gap-4 mx-8 items-start justify-center">
          <div className="max-w-xs shadow-[0px_0px_10px_3px_rgba(0,0,0,0.15)] p-3 rounded-lg">
            <div className="flex flex-row gap-12 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 mx-2 text-sm font-medium">
                  📍 {bookData.pickupLocation}
                </p>
                <div className="mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                  </svg>
                </div>
                <p className="flex flex-row gap-2 mx-2 text-sm font-medium">
                  🏁 {bookData.dropoffLocation}
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <p className="text-gray-700 text-sm dark:text-gray-400">
                    🚍 {bookData.vehicalSize + " ft"} :{" "}
                    {bookData.vehicalBodyType + " Body"}
                  </p>
                  <p className="flex flex-row gap-2 text-sm font-medium">
                    📦 {bookData.goodsType}
                  </p>
                  <p className="flex flex-row gap-2 text-sm font-medium">
                    ⚖ {bookData.goodsWeight} Ton
                  </p>
                  <p className="text-gray-700 text-sm font-medium dark:text-gray-400">
                    📏{bookData.goodsSize}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs shadow-[0px_0px_10px_3px_rgba(0,0,0,0.15)] p-3 rounded-lg">
            <div className="flex flex-row gap-4 p-1 justify-center items-center">
              <div>
                <div>
                  <p className="font-semibold text-sm">Damage Protection</p>
                  <p className="text-gray-700 text-xs dark:text-gray-400">
                    Providing protection against accidental damage during
                    transit.
                    <span
                      className="text-blue cursor-pointer"
                      onClick={() => handleLearnMore()}
                    >
                      {" "}
                      Learn More.
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 mt-2 text-sm font-semibold dark:text-gray-400">
                    ₹ 2,000, Coverage for any type of material.
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="text-xs border border-blue text-blue font-semibold rounded-lg px-3 py-1 relative overflow-hidden"
                  onClick={handleCargoInsurance}
                >
                  {isInsuranceAddedShow ? (
                    <>
                      <svg
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM12 20a8 8 0 008-8h-4a4 4 0 01-4 4v4z"
                        ></path>
                      </svg>
                      <span className="ml-2">Adding...</span>
                    </>
                  ) : (
                    "Add"
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs shadow-[0px_0px_10px_3px_rgba(0,0,0,0.15)] p-3 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-semibold mb-4">
                  🛣 Distance : {bookData.distanceKm ? bookData.distanceKm : "0"}{" "}
                  km
                </p>
                <div className="mb-2">
                  <img src={line} alt="alt : line"></img>
                </div>
                <div className="flex flex-row gap-2 text-sm font-semibold mb-4">
                  <p>🕰 Estimated Date : </p>
                  <p>{expectedDeliveryDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-12">
        <img src={line} alt="alt : line"></img>
      </div>

      <p className="flex relative -top-12 m-2 w-screen max-w-sm px-6 font-semibold">
        Payment
      </p>
      <div className="relative -top-14 mt-6 mx-8 mb-3 max-s-sm w-auto ">
        <p className="-mt-3 mx-4">Mode</p>
        <div
          id="modeDiv"
          className="flex flex-row border border-solid border-gray-300 rounded-md p-2 justify-start gap-5 mx-4 mt-1"
        >
          <div className="flex items-center ">
            <input
              id="checkAdvance"
              type="checkbox"
              value="Advance"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleCheckboxChange}
              checked={paymentMode === "Advance"} // set checked based on state
            />

            <label
              for="checkAdvace"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Advance
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkToPay"
              type="checkbox"
              value="ToPay"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleCheckboxChange}
              checked={paymentMode === "ToPay"} // set checked based on state
            />

            <label
              for="checkToPay"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              To-Pay
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkBilling"
              type="checkbox"
              value="Billing"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleCheckboxChange}
              checked={paymentMode === "Billing"} // set checked based on state
            />

            <label
              for="checkBilling"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Billing
            </label>
          </div>
        </div>
        <p className="mt-3 mx-4 mb-2">Pay Via</p>
        <div
          id="viaDiv"
          className="flex flex-col border border-solid border-gray-300 rounded-md p-2 justify-start gap-2 mx-4"
        >
          <div className="">
            <div className="flex items-center m-1">
              <input
                id="checkCash"
                type="checkbox"
                value="Cash"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleCheckboxChangeVia}
                checked={paymentVia === "Cash"} // set checked based on state
              />
              <label
                for="checkCash"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {" "}
                Cash
              </label>
            </div>
            <div className="relative ">
              <img src={line} alt="alt : line"></img>
            </div>

            <div className="flex items-center m-1 ">
              <input
                id="checkUPI"
                type="checkbox"
                value="UPI"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleCheckboxChangeVia}
                checked={paymentVia === "UPI"} // set checked based on state
              />

              <label
                for="checkUPI"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {" "}
                UPI
              </label>
            </div>
            <div className="relative ">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="relative ">
              <img src={line} alt="alt : line"></img>
            </div>
            <div className="flex items-center m-1">
              <input
                id="checkIB"
                type="checkbox"
                value="Internet Banking"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleCheckboxChangeVia}
                checked={paymentVia === "Internet Banking"} // set checked based on state
              />

              <label
                for="checkIB"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {" "}
                Internet Banking
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="btn btn-wide mt-6 bg-blue hover:bg-blue"
            onClick={(event) => handleFormSubmit(event)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
