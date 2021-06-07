import * as React from "react";
import UseScrollFadeIn from "../../atoms/Scroll/UseScrollFadeIn";
import useScrollCount from "../../atoms/Scroll/UseScrollCount";
import UseScrollClipPath from "../../atoms/Scroll/UseScrollClipPath";
import SurveyGif from "../../../gif/Survey.gif";

function SecondPage() {
  const animatedItem1 = UseScrollFadeIn("up", 1, 0.5);
  const animatedItem2 = UseScrollFadeIn("down", 2, 1);
  const animatedItem3 = UseScrollClipPath("right", 2, 1);

  return (
    <div>
      <div className="SecondPage_Summery" {...animatedItem1}>
        <h1>어떤 와인을 골라야할지 고민이신가요?</h1>
        <p>간단한 취향 테스트를 통해</p>
        <p>당신을 위한 완벽한 와인을 만나보세요.</p>
      </div>

      <img className="secondGif" src={SurveyGif} {...animatedItem3}></img>
    </div>
  );
}

export default SecondPage;

//사용자의 취향에 따른 최고의 와인 TOP3 추천 뿐만 아니라,

{
  /* <div {...animatedItem1} className="SecondPage_Summery1">
        <h1>사용자의 취향에 따른 최고의 와인 TOP3 추천 뿐만 아니라,</h1>
        <h1>관심있는 태그와 와인을 찜하고,</h1>
        <h1>좋아하는 와인에 리뷰를 남겨</h1>
        <h1>다른 사용자들과 이야기를 나눌 수 있어요!</h1>
      </div>
      <div {...animatedItem2}>
        <h1>whywine에서 전세계</h1>
        <h1>
          {" 총"}
          <span {...animatedItem3}></span>개의 달하는 와인들을 만나보세요
        </h1>
      </div> */
}
