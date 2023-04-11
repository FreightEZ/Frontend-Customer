import line from "../../assets/images/line.svg";

import { useState } from "react";
import Scroll from "./scroll";
import SearchList from "./searchList";

export default function Track({ details }) {
  const [searchFeild, setSearchFeild] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [data, setData] = useState({});
  const [mainData, setMainData] = useState(details);

  const handleChange = (e) => {
    setSearchFeild(e.target.value);
    console.log(searchFeild + " => " + e.target.value);
    if (e.target.value === "") {
      setSearchShow(true);
    } else {
      setSearchShow(true);
    }
    setData(
      details.filter((order) => {
        return order.dropoffLocation
          .toLowerCase()
          .includes(searchFeild.toLowerCase());
      })
    );
  };
  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredOrder={data}></SearchList>
        </Scroll>
      );
    }
  }
  return (
    <div className="relative flex drop-shadow-2xl -top-14 items-center justify-center bg-white max-w-screen rounded-t-2xl">
      <div className="flex flex-col items-center justify-center max-h-screen">
        <p className="mt-5 mb-3 w-screen max-w-md px-4 font-semibold">
          Track Ongoing Cargo
        </p>
        <div className="relative -top-2">
          <img src={line} alt="alt : line"></img>
        </div>

        <div className="-mt-4 w-screen max-w-md p-4">
          <input
            type="search"
            id="searchOrders"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Order"
            onChange={handleChange}
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
