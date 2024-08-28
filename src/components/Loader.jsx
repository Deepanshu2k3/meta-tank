import React from "react";
import img from "./assets/img/meta-tank-logo.png";

const Loader = () => {
  return (
    <>
      <div id="loading">
        <div className="loader-wrapper">
          <div className="loader">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
