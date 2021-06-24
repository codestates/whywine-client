import React, { useState, useReducer } from "react";
import SurDKnowBtn from "../../atoms/Buttons/surDKnowBtn";
import SurNextBtn from "../../atoms/Buttons/surNextBtn";
import SurPrevBtn from "../../atoms/Buttons/surPrevBtn";
import SurSkipBtn from "../../atoms/Buttons/surSkipBtn";

// type Action =
//   | { type: "FIRST_QUESTION" }
//   | { type: "SECOND_QUESTION" }
//   | { type: "THIRD_QUESTION" }
//   | { type: "FOURTH_QUESTION" }
//   | { type: "FIFTH_QUESTION" };

// function surQuesReducer(surQues: string, action: Action): string {
//   switch (action.type) {
//     case "FIFTH_QUESTION":

//     default:
//       throw new Error("Unhandled action type");
//   }
// }
interface routeQues {
  surNext: string;
  surPrev: string;
}
const surBtns: React.FC<routeQues> = ({ surNext, surPrev }) => {
  return (
    <div>
      <SurSkipBtn />
      <div className="surNextPrevBox">
        {surPrev === "first" ? null : (
          <SurPrevBtn btnType="이전" surPrev={surPrev} />
        )}
        {surPrev === "first" ? null : (
          <SurNextBtn btnType="다음" surNext={surNext} />
        )}
      </div>
      <div className="surDKnowBtn">
        <SurDKnowBtn surNext={surNext} />
      </div>
    </div>
  );
};

export default surBtns;
