import React, { useState, useEffect } from "react";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import axios from "axios";
require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

interface UserInfoPrpos {
  bad: [];
  email: string;
  good: [];
  id: number;
  image: string;
  likes: number;
  nickname: string;
  tags: [];
  wines: [];
}
interface ReviewsProps {
  commentText: string;
  commentRating: number;
  key: number;
}

function Reviews({ commentText, commentRating, key }: ReviewsProps) {
  const [userInfo, setUserInfo] = useState<UserInfoPrpos>({
    bad: [],
    email: "",
    good: [],
    id: 999,
    image: "",
    likes: 0,
    nickname: "게스트",
    tags: [],
    wines: [],
  });
  const [deleteReview, setDeleteReview] = useState(true);

  const handleDeleteRewiew = async () => {
    setDeleteReview(false);

    // await axios.delete(`${server}/comment`,data:{"commentId":key});
  };

  return (
    <>
      {deleteReview ? (
        <li className="reviews">
          <div className="reviewContent">
            <div className="reviewWriter">{userInfo.nickname}</div>
            <span className="wineReview">{commentText}</span>
            <div>별점: {commentRating}</div>
            <ReviewTime />
          </div>

          <div className="reviewBtns">
            <ReviewLikeBtn />
            <ReplyBtn />
            <button onClick={() => handleDeleteRewiew()}>삭제하기</button>
          </div>
        </li>
      ) : null}
    </>
  );
}

export default Reviews;
function data(arg0: string, data: any, arg2: {}) {
  throw new Error("Function not implemented.");
}
