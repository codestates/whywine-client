import * as React from "react";
import MainRandingGif from "../../../gif/main2.gif";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";
import UseScrollClipPath from "../../atoms/Scroll/UseScrollClipPath";

function ThirdPage() {
  const animatedItem1 = UseScrollFadeIn("up", 1, 0.5);
  const animatedItem2 = UseScrollClipPath("left", 2, 1);
  return (
    <div className="ThirdItem">
      <img src={MainRandingGif} className="ThirdGif" {...animatedItem2}></img>

      <div className="ThirdPageSummery" {...animatedItem1}>
        <h1>
          태그 검색으로
          <br /> 보다 간편하게
          <br /> 와인을 찾아보세요
        </h1>
        <p>원하는 태그를 클릭할 때마다</p>
        <p>최적의 와인을 추천 받을 수 있어요.</p>
      </div>
    </div>
  );
}

export default ThirdPage;
