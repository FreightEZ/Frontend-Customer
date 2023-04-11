// src/components/Scroll.js

import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", height: "70vh", width: "90%" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
