// src/components/Scroll.js

import React from "react";

const ScrollPassedCity = (props) => {
  return (
    <div
      style={{ overflowY: "scroll", height: "20vh", width: "100%" }}
      className="p-2"
    >
      {props.children}
    </div>
  );
};

export default ScrollPassedCity;
