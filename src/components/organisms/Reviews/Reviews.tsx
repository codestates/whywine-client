import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
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
  setCommentUpdate: Dispatch<SetStateAction<boolean>>;
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
  setCommentUpdate,
}: ReviewsProps) {
  const [deleteReview, setDeleteReview] = useState(false);

  // * 댓글 삭제 함수
  const handleDeleteRewiew = async () => {
    setDeleteReview(true);
    await axios
      .delete(`${server}comment`, {
        data: { commentId: commentId },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((data) => handleComments())
      // * 댓글 삭제 후 handleComments 함수 실행으로 commentsList 상태 변경해 재랜딩
      .catch((err) => {});
  };

  return (
    <li className="reviews" style={{ opacity: deleteReview ? "0" : "1" }}>
      <div className="reviewContent">
        <div className="reviewWriter">{user.nickname}</div>
        <span className="wineReview">{commentText}</span>
        <div>별점: {commentRating}</div>
        <div>작성시간: {createdAt?.slice(0, 10)}</div>
      </div>

      <div className="reviewBtns">
        <ReviewLikeBtn like={true} />
        <ReviewLikeBtn like={false} />
        <ReplyBtn />
        <button onClick={() => handleDeleteRewiew()}>삭제하기</button>
        <button onClick={() => setCommentUpdate(true)}>수정하기</button>
      </div>
    </li>
  );
}

export default Reviews;
