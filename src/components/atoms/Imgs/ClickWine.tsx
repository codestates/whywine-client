import React, { useState, useEffect } from "react";
import clickPng from "../../../img/click_pointer.png";

interface state {
  isClicked: boolean;
}
const ClickWine: React.FC<state> = ({ isClicked }) => {
  return (
    <div>
      <img
        className="clickWine"
        src={clickPng}
        alt="클릭"
        style={{ display: isClicked ? "none" : "block" }}
      />
    </div>
  );
};

export default ClickWine;
