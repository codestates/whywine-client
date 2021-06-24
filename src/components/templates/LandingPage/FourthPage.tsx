import * as React from "react";
import MainCommentGif from "../../../gif/wineModal2.gif";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";

function FourthPage() {
  const animatedItem1 = UseScrollFadeIn("up", 1, 0.5);
  const animatedItem2 = UseScrollFadeIn("down", 2, 1);
  return (
    <div>
      <div className="FourthPage_Summery" {...animatedItem1}>
        <h1>
          추천 와인이 <br />
          마음에 드셨나요?
        </h1>
        <p>그렇다면 내 생각을 자유롭게 공유하고</p>
        <p>다른 분들에게도 추천해보세요!</p>
      </div>
      <img
        src={MainCommentGif}
        className="FourthPageGif"
        {...animatedItem2}
      ></img>
    </div>
  );
}

export default FourthPage;
