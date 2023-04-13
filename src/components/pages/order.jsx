import { useNavigate } from "react-router-dom";

import line from "../../assets/images/line.svg";
import { noteContext } from "../../Context/noteContext";
import { useContext } from "react";
// import { Context } from "../Context/context";

export default function Order() {
  const navigate = useNavigate();
  const { bookData } = useContext(noteContext);
  console.log("🚀 ~ file: order.jsx:10 ~ Order ~ bookData:", bookData);
  console.log("ORDER");
  // <Context.Consumer>
  //   {(context) => console.log(context.bookingDetails)}
  // </Context.Consumer>;
  // const { bookingDetails } = useContext(Context);
  // console.log();
  function handleclick(e) {
    console.log("clicked");
    navigate("/success");
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
          className="w-5 h-5"
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
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
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
                    class="w-6 h-7"
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
                    {bookData.bodyType + " Body"}
                  </p>
                  <p className="flex flex-row gap-2 text-sm font-medium">
                    📦 {bookData.materialDetail}
                  </p>
                  <p className="flex flex-row gap-2 text-sm font-medium">
                    ⚖ {bookData.weight}
                  </p>
                  <p className="text-gray-700 text-sm font-medium dark:text-gray-400">
                    📏{bookData.size}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-xs shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-4 p-1 justify-center items-center">
              <div>
                <p className="font-semibold text-sm">Damage Protection </p>
                <p className="text-gray-700 text-xs dark:text-gray-400">
                  Providing protection against accidental damage in transit
                  <a href="www.google.com" className="text-blue">
                    {" "}
                    learn more.
                  </a>
                </p>
                <div>
                  <p className="text-gray-700 text-xs font-semibold dark:text-gray-400">
                    ₹ cargo insurance charges
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="text-xs border border-blue text-blue font-semibold
               rounded-lg px-3 py-1"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-xs w-screen shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] p-3 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
              <div>
                <p className="flex flex-row gap-2 text-sm font-semibold mb-4">
                  🛣 Distance : {bookData.distance ? bookData.distance : "0"} km
                </p>
                <div className="mb-2">
                  <img src={line} alt="alt : line"></img>
                </div>
                <div className="flex flex-row gap-2 text-sm font-semibold mb-4">
                  <p>🕰 Estimated Date :</p>
                  <p>{bookData.dateForPickup}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative -top-12">
        <img src={line} alt="alt : line"></img>
      </div>

      <p className="flex relative -top-12 m-2 w-screen max-w-md px-6 font-semibold">
        Payment
      </p>
      <div className="relative -top-14 mt-6 mx-8 mb-3">
        <p className="-mt-3 mx-4">Mode</p>
        <div className="flex flex-row border border-solid border-gray-300 rounded-md p-2 justify-start gap-5 mx-4 mt-1">
          <div className="flex items-center ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Advance
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              To-Pay
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />

            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {" "}
              Billing
            </label>
          </div>
        </div>
        <p className="mt-3 mx-4 mb-2">Pay Via</p>
        <div className="flex flex-col border border-solid border-gray-300 rounded-md p-2 justify-start gap-2 mx-4">
          <div className="">
            <div className="flex items-center m-1">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="link-checkbox"
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
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                for="link-checkbox"
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
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                for="link-checkbox"
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
            onClick={handleclick}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}
