import * as React from "react";
import MainCommentGif from "../../../gif/MainComment.gif";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";

function FourthPage() {
  const animatedItem1 = UseScrollFadeIn("up", 1, 0.5);
  const animatedItem2 = UseScrollFadeIn("down", 2, 1);
  return (
    <div>
      <div className="FourthPage_Summery" {...animatedItem1}>
        <h1>다른 사람들은 어떻게 생각하는지</h1>
        <h1>내 생각을 자유롭게 공유하고</h1>
        <h1>마음에 드셨으면 찜하세요 !</h1>
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
