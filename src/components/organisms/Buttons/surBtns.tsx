import React from "react";
import SurDknowBtn from "../../atoms/Buttons/surDKnowBtn";
import SurNextPrevBtn from "../../atoms/Buttons/surNextPrevBtn";
import SurSkipBtn from "../../atoms/Buttons/surSkipBtn";

export default function surBtns() {
  return (
    <div>
      <SurSkipBtn />
      <div className="surNextPrevBox">
        <SurNextPrevBtn btnType="다음" />
        <SurNextPrevBtn btnType="이전" />
      </div>

      <SurDknowBtn />
    </div>
  );
}
