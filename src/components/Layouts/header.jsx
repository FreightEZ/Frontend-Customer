import React, { useEffect } from "react";

import mandala from "../../assets/images/headerMandala.svg";
import profile from "../../assets/images/profilePhoto.svg";
import humburgerIcon from "../../assets/images/humburgerIcon.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleProfile() {
    navigate("/profile");
  }
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="">
        <img src={mandala} alt="alt : Mandala Pattern"></img>
        <div
          className="absolute left-7 top-11 cursor-pointer"
          onClick={handleProfile}
        >
          <img src={profile} alt="alt : Profile"></img>
          <div className="absolute left-8 top-8">
            <img src={humburgerIcon} alt="alt : Humburger Icon"></img>
          </div>
        </div>
        <div className="w-3 h-3  absolute left-80 top-10">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1">
              🔻
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  onClick={() => {
                    navigate("/track");
                  }}
                >
                  Ongoing Orders
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/pendingOrders");
                  }}
                >
                  Pending Orders
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("/previousOrders");
                  }}
                >
                  Completed Orders
                </a>
              </li>
              <li>
                <a className="text-red" onClick={handleLogout}>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
