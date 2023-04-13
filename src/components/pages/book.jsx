import line from "../../assets/images/line.svg";
import footerMandla from "../../assets/images/footerMandala.svg";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noteContext } from "../../Context/noteContext";
// import { Context } from "../Context/context";

export default function Book() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dateForPickup, setDateForPickup] = useState("");
  const [materialDetail, setMaterialDetail] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [vehicalSize, setVehicalSize] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [distance, setDistance] = useState("");

  const { setbookData } = useContext(noteContext);

  const navigate = useNavigate();

  const reqBody = {
    pickupLocation: pickupLocation,
    dropoffLocation: dropoffLocation,
    dateForPickup: dateForPickup,
    materialDetail: materialDetail,
    weight: weight,
    size: size,
    vehicalSize: vehicalSize,
    bodyType: bodyType,
  };
  // useEffect(() => {}, [checked === true])
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Done");
    // <Context.Provider value={{ bookingDetails: reqBody }}></Context.Provider>;
    console.log(reqBody);
    setbookData(reqBody);
    navigate("/order");
  }
  // console.log(reqBody);
  return (
    <div className="relative flex drop-shadow-2xl -top-14 items-center justify-center bg-white max-w-screen rounded-t-2xl">
      <form className="flex flex-col items-center justify-center">
        <p className="mt-5 w-screen max-w-md px-4 font-semibold">
          Location Details
        </p>
        <div className="-mt-3 w-screen max-w-md p-4">
          <input
            type="text"
            id="pickupLocation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pickup Location"
            value={pickupLocation}
            onChange={(event) => {
              setPickupLocation(event.target.value);
            }}
            required
          />
        </div>
        <div className="-mt-5 w-screen max-w-md p-4">
          <input
            type="text"
            id="dropoffLocation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Dropoff Location"
            value={dropoffLocation}
            onChange={(event) => {
              setDropoffLocation(event.target.value);
            }}
            required
          />
        </div>
        <div className="-mt-5 w-screen max-w-md p-4">
          <input
            type="date"
            id="dateForPickup"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="dd/mm/yyyy"
            value={dateForPickup}
            onChange={(event) => {
              setDateForPickup(event.target.value);
            }}
            required
          />
        </div>
        <div className="mb-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <p className="mb-2 w-screen max-w-md px-4 font-semibold">
          Goods Details
        </p>
        <div className="-mt-5 w-screen max-w-md p-4">
          <input
            type="text"
            id="materialType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Material Type (e.g. steel, cement etc)"
            value={materialDetail}
            onChange={(event) => {
              setMaterialDetail(event.target.value);
            }}
            required
          />
        </div>
        <div className="-mt-5 w-screen max-w-md p-4">
          <input
            type="number"
            id="weight"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Weight (e.g. 10 ton, 25 ton )"
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
            required
          />
        </div>
        <div className="-mt-5 w-screen max-w-md p-4">
          <input
            type="text"
            id="size"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Size (L X B X H )"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
            required
          />
        </div>
        <div className="mb-2">
          <img src={line} alt="alt : line"></img>
        </div>
        <p className="mb-2 w-screen max-w-md px-4 font-semibold">
          Vehicle Requirement
        </p>
        <div className="-mt-4 w-screen max-w-md p-4">
          <input
            type="text"
            id="vehicalSize"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="vehical Size (e.g. 32 ft, 24 ft)"
            value={vehicalSize}
            onChange={(event) => {
              setVehicalSize(event.target.value);
            }}
            required
          />
        </div>
        <div className="-mt-4 w-screen max-w-md p-4">
          <input
            type="text"
            id="bodyType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Body Type (e.g. close, open, half )"
            value={bodyType}
            onChange={(event) => {
              setBodyType(event.target.value);
            }}
            required
          />
        </div>

        <div className="-top-3">
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
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-4 max-h-32">
          <img src={footerMandla} alt="alt : Mandala Pattern"></img>
          <div className="relative -top-44 p-3 max-w-screen-sm ">
            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
                <div className="border-b-2 border-neutral-100 py-1 px-6 dark:border-neutral-600 dark:text-neutral-50">
                  <div className="flex flex-row items-start ">
                    <div className="flex flex-col gap-1 items-start">
                      <div className="text-sm">
                        📍 {""}
                        {pickupLocation.length == 0
                          ? "Src"
                          : pickupLocation}{" "}
                        {"--->"} 🏁{" "}
                        {dropoffLocation.length == 0 ? "Dest" : dropoffLocation}{" "}
                      </div>
                      <div className="text-sm">
                        🚍{" "}
                        {vehicalSize.length == 0 ? "NA" : vehicalSize + " ft"} :{" "}
                        {bodyType.length == 0 ? "NA" : bodyType + " Body"}
                      </div>
                      <div className="text-sm font-semibold">
                        📦 {weight.length == 0 ? "NA" : weight} Ton, Size of
                        each goods : {size.length == 0 ? "NA" : size}{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between gap-16 p-3 mx-3 ">
                  <div className="flex flex-col items-start">
                    <div>
                      <div className="text-sm font-semibold -top-2">
                        🛣 Distance {distance.length == 0 ? "NA" : distance} km
                      </div>
                    </div>
                    {/* <div className="text-xs">86</div>
                    <div className="text-sm font-semibold -top-2">₹ 16,000</div>
                    <div className="text-xs">₹ 2000/Tonne </div> */}
                  </div>
                  <div className="grid grid-rows-1 gap-2">
                    <div>
                      <button
                        type="submit"
                        className="text-white bg-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                        w-[8rem]"
                        onClick={handleFormSubmit}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
