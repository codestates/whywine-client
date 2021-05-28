import React, { useState } from "react";
import LikeBtn from "../../atoms/Buttons/LikeBtn";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import Like from "../../atoms/Imgs/like";
import UnLike from "../../atoms/Imgs/unLike";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Imgs/Stars";
import Reviews from "../Reviews/Reviews";

interface Props {
  ModalEl: any;
}

function WineModal({ ModalEl }: Props) {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = (): any => {
    setIsLike(!isLike);
  };

  return (
    <section ref={ModalEl} className="winemodal">
      <div className="reviewHeader">
        <ReviewWineName />
      </div>

      <Reviews />

      <div className="likeBox">
        {isLike ? (
          <Like handleLikeBtn={handleLikeBtn} />
        ) : (
          <UnLike handleLikeBtn={handleLikeBtn} />
        )}
        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((idx, index) => {
            return <Stars key={index} />;
          })}
        </div>
        <div>나는야와인고수님 외 4,382명이 찜한 와인입니다!</div>
      </div>

      <div className="reviewInputBox">
        <form className="reviewInput">
          <ReviewInput />
          <ReviewBtn />
        </form>
      </div>
    </section>
  );
}

export default WineModal;
