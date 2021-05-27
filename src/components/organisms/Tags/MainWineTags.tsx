import React, { useState } from "react";
import MainResetTagBtn from "../../atoms/Buttons/MainResetTagBtn";
import MainTypeTag from "../../atoms/Tags/MainTypeTag";
import MainBodyTag from "../../atoms/Tags/MainBodyTag";
import MainLabel from "../../atoms/Tags/MainLabel";
import MainTanninTag from "../../atoms/Tags/MainTanninTag";
import MainAcidityTag from "../../atoms/Tags/MainAcidityTag";
import MainSweetnessTag from "../../atoms/Tags/MainSweetnessTag";
import wine from "../../../img/wine_main.png";
const MainWineTags = () => {
  return (
    <div>
      {/* <div className="mainLabelBox">
        <MainLabel />
      </div> */}
      <div className={"mainTagBox"}>
        <img src={wine} style={{ width: "300px" }} />

        <div className="typeTag">
          <MainTypeTag />
        </div>
        <div className="bodyTanninTag">
          <MainBodyTag />
          <MainTanninTag />
        </div>
        <div className="aciditySweetnessTag">
          <MainAcidityTag />
          <MainSweetnessTag />
        </div>
      </div>
    </div>
  );
};

export default MainWineTags;
