import React from "react";

import mandala from "../../assets/images/headerMandala.svg";
import profile from "../../assets/images/profilePhoto.svg";
import humburgerIcon from "../../assets/images/humburgerIcon.svg";

export default function Header() {
  return (
    <div>
      <div>
        <img src={mandala} alt="alt : Mandala Pattern"></img>
        <div className="absolute left-7 top-11">
          <img src={profile} alt="alt : Profile"></img>
          <div className="absolute left-8 top-8">
            <img src={humburgerIcon} alt="alt : Humburger Icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
