import React, { useState } from "react";
import MainResetTagBtn from "../../atoms/Buttons/MainResetTagBtn";
import MainTypeTag from "../../atoms/Tags/MainTypeTag";
import MainBodyTag from "../../atoms/Tags/MainBodyTag";
import MainLabel from "../../atoms/Tags/MainLabel";
import MainTanninTag from "../../atoms/Tags/MainTanninTag";
import MainAcidityTag from "../../atoms/Tags/MainAcidityTag";
import MainSweetnessTag from "../../atoms/Tags/MainSweetnessTag";

const MainWineTags = () => {
  return (
    <div>
      <div className="mainLabelBox">
        <MainLabel />
      </div>
      <div className={"mainTagBox"}>
        <MainTypeTag wineType={["레드", "화이트", "로제", "스파클링"]} />
        <MainBodyTag />
        <MainTanninTag />
        <MainAcidityTag />
        <MainSweetnessTag />
      </div>
    </div>
  );
};

export default MainWineTags;
