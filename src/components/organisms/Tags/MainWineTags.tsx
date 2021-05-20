import React, { useState } from "react";
import MainResetTagBtn from "../../atoms/Buttons/MainResetTagBtn";
import MainTypeTag from "../../atoms/Tags/MainTypeTag";
import MainBodyTag from "../../atoms/Tags/MainBodyTag";
import MainLabel from "../../atoms/Tags/MainLabel";

const MainWineTags = () => {
  return (
    <div>
      <div className="mainLabelBox">
        <MainLabel />
      </div>
      <div className={"mainTagBox"}>
        <MainResetTagBtn />
        <MainTypeTag wineType={["레드", "화이트", "로제", "스파클링"]} />
        <MainBodyTag wineBody={"묵직한"} />
      </div>
    </div>
  );
};

export default MainWineTags;
