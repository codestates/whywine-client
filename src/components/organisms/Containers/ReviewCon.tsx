import React, { useState } from "react";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import Like from "../../atoms/Imgs/like";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Imgs/Stars";

const ReviewCon = () => {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = (): any => {
    setIsLike(!isLike);
  };
  return (
    <div>
      <div className="reviewHeader">
        <ReviewWineName />
      </div>
      <ul className="reviewBox">
        <div className="reviews">
          <div className="reviewContent">
            <a href="#" className="reviewWriter">
              리뷰 작성자
            </a>
            <span className="wineReview">와인 리뷰</span>
          </div>
          <div className="reviewBtns">
            <ReviewTime />
            <ReviewLikeBtn />
            <ReplyBtn />
          </div>
          <div className="reviews">
            <div className="reviewContent">
              <a href="#" className="reviewWriter">
                리뷰 작성자
              </a>
              <span className="wineReview">와인 리뷰</span>
            </div>
            <div className="reviewBtns">
              <ReviewTime />
              <ReviewLikeBtn />
              <ReplyBtn />
            </div>
          </div>
          <div className="reviews">
            <div className="reviewContent">
              <a href="#" className="reviewWriter">
                리뷰 작성자
              </a>
              <span className="wineReview">와인 리뷰</span>
            </div>
            <div className="reviewBtns">
              <ReviewTime />
              <ReviewLikeBtn />
              <ReplyBtn />
            </div>
          </div>
        </div>
      </ul>

      <div className="likeBox">
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
    </div>
  );
};

export default ReviewCon;