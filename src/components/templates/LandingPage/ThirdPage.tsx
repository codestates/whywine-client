import * as React from "react";
import MainRandingGif from "../../../gif/MainRendin.gif";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";

function ThirdPage() {
  const animatedItem1 = UseScrollFadeIn("up", 1, 0.5);
  const animatedItem2 = UseScrollFadeIn("down", 2, 1);
  return (
    <div className="ThirdItem">
      <img src={MainRandingGif} className="ThirdGif" {...animatedItem2}></img>

      <div className="ThirdPageSummery" {...animatedItem1}>
        <h1>태그들을 클릭하거나</h1>
        <h1>와인을 검색을 해서</h1>
        <h1>더 많은 와인을 찾으세요 !</h1>
      </div>
    </div>
  );
}

export default ThirdPage;
