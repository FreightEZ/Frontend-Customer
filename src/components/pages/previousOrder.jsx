import line from "../../assets/images/line.svg";

import { useContext, useEffect, useState } from "react";
import ScrollTrack from "./scrollTrack";
import SearchList from "../pages/serachList";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { noteContext } from "../../Context/noteContext";

export default function PreviousOrders() {
  const [searchFeild, setSearchFeild] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { emailLog } = useContext(noteContext);
  const getData = async () => {
    try {
      const response = await axios.post("/getPreviousOrderDetails", {
        email: emailLog,
      });
      console.log(response.data);
      setData(response.data);
      console.log("previous data :", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchFeild.length > 0) {
      setData(
        data.filter((order) => {
          return (
            order.dropoffLocation
              .toLowerCase()
              .includes(searchFeild.toLowerCase()) ||
            order.goodsType.toLowerCase().includes(searchFeild.toLowerCase())
          );
        })
      );
    } else {
      getData();
      setData(data);
    }
  }, [searchFeild]);
  function searchList() {
    return (
      <ScrollTrack>
        <SearchList filteredOrder={data}></SearchList>
      </ScrollTrack>
    );
  }
  function handleBack() {
    navigate("/book");
  }
  return (
    <div
      className="relative flex drop-shadow-2xl -top-14 items-start justify-center bg-white max-w-sm
     rounded-t-2xl"
    >
      <div className="flex flex-col items-center justify-center max-h-screen">
        <p className="flex flex-row  items-center mt-5 mb-4 w-full max-w-sm px-2 font-semibold">
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
          Completed Orders
        </p>
        <div className="relative -top-2">
          <img src={line} alt="alt : line"></img>
        </div>

        <div className="-mt-4 w-screen max-w-sm p-4">
          <input
            type="search"
            id="searchOrders"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Order with Dropoff Location / Goods Types"
            onChange={(e) => setSearchFeild(e.target.value)}
            required
          />
        </div>
        <div className="relative -top-2">
          <img src={line} alt="alt : line"></img>
        </div>
        {searchList()}
      </div>
    </div>
  );
}
