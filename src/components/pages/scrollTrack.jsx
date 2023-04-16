// src/components/Scroll.js

import React from "react";

const ScrollTrack = (props) => {
  return (
    <div
      className="mx-2 my-2"
      style={{ overflowY: "scroll", height: "90vh", width: "90%" }}
    >
      {props.children}
    </div>
  );
};

export default ScrollTrack;
