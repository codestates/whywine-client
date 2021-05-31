import React, { useState } from "react";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import Like from "../../atoms/Imgs/like";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Imgs/Stars";
import Reviews from "../Reviews/Reviews";

interface Props {
  ModalEl: any;
}

function WineModal({ ModalEl }: Props) {
  return (
    <section ref={ModalEl} className="winemodal">
      <div className="likeBox">
        <div className="reviewHeader">
          <ReviewWineName />
        </div>
        <div className="wineimg">사진</div>
        <Like />
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((idx, index) => {
            return <Stars key={index} />;
          })}
        </div>
        <div>나는야와인고수님 외 4,382명이 찜한 와인입니다!</div>
      </div>
      <div className="hrDiv">
        <hr className="hr2"></hr>
      </div>

      <div className="reviewInputBox">
        <Reviews />
        <form className="reviewInput">
          <ReviewInput />
          <ReviewBtn />
        </form>
      </div>
    </section>
  );
}

export default WineModal;
