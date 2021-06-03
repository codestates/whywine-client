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
  const [deleteReview, setDeleteReview] = useState(false);

  const handleDeleteRewiew = async () => {
    setDeleteReview(true);
    await axios
      .delete(`${server}comment`, {
        data: { commentId: commentId },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((data) => handleComments())
      .catch((err) => {
        console.dir(err);
        console.log(commentId);
      });
  };

  return (
    <li className="reviews" style={{ opacity: deleteReview ? "0" : "1" }}>
      <div className="reviewContent">
        <div className="reviewWriter">{user.nickname}</div>
        <span className="wineReview">{commentText}</span>
        <div>별점: {commentRating}</div>
        <div>작성시간: {createdAt}</div>
      </div>

      <div className="reviewBtns">
        <ReviewLikeBtn like={true} />
        <ReviewLikeBtn like={false} />
        <ReplyBtn />
        <button onClick={() => handleDeleteRewiew()}>삭제하기</button>
      </div>
    </li>
  );
}

export default Reviews;
function data(arg0: string, data: any, arg2: {}) {
  throw new Error("Function not implemented.");
}
