import React, { useState, useEffect } from "react";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import Like from "../../atoms/Imgs/like";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Imgs/Stars";
import Reviews from "../Reviews/Reviews";

interface Props {
  ModalEl: any;
  name: string;
  id: number;
  likeCount: number;
  description: string;
  image: string;
  price: number;
  sort: string;
  tags: object[];
}

function WineModal({
  ModalEl,
  name,
  id,
  likeCount,
  description,
  image,
}: Props) {
  useEffect(() => {});

  return (
    <section ref={ModalEl} className="winemodal">
      <div className="likeBox">
        <div className="reviewHeader">
          <ReviewWineName name={name} />
        </div>

        <div className="wineimg">
          <img src={image} alt="와인" />
        </div>

        <Like id={id} />

        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((idx, index) => {
            return <Stars key={index} />;
          })}
        </div>

        <div>{likeCount}명이 찜한 와인입니다!</div>
      </div>

      <div className="hrDiv">
        <hr className="hr2"></hr>
      </div>

      <div className="reviewInputBox">
        <form className="reviewInput">
          <ReviewInput />
          <ReviewBtn />
        </form>
        <Reviews />
      </div>
    </section>
  );
}

export default WineModal;
