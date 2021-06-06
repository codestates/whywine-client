import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import MyAccount from "../Togle/MyAccount";

require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

interface ReviewsProps {
  commentText: string;
  commentRating: number;
  key: number;
  commentId: number;
  bad_count: number;
  good_count: number;
  createdAt?: string;
  user: {
    id: number;
    image: string;
    nickname: string;
  };
  handleComments: () => void;
}

function Reviews({
  commentText,
  commentRating,
  commentId,
  bad_count,
  good_count,
  createdAt,
  user,
  handleComments,
}: ReviewsProps) {
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const [isLogin, setIslogin] = useState<boolean>(false);
  const openSignInModal: React.MouseEventHandler<HTMLDivElement> = () => {
    setSignInOpen(true);
  };
  return (
    <li className="gusetReviews">
      <div className="gusetReviewContent">
        <div className="reviewUserInfo">
          <div className="myAccount_review">
            {" "}
            <MyAccount isLogin={isLogin} openModal={openSignInModal} />
          </div>
          <div>
            <div className="reviewWriter">작성자: {user.nickname}</div>
            <div className="review_date">{createdAt?.slice(0, 10)}</div>
          </div>
        </div>

        <div className="wineReview">{commentText}</div>

        <div className="reviewBtns">
          <div className="review_star">별점: {commentRating}</div>
          <div className="Likebtns">
            {" "}
            <ReviewLikeBtn
              like={true}
              good_count={good_count}
              handleComments={() => handleComments()}
              commentId={commentId}
            />
            <ReviewLikeBtn
              like={false}
              good_count={good_count}
              handleComments={() => handleComments()}
              commentId={commentId}
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Reviews;
