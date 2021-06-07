import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import axios from "axios";
import Stars from "../../atoms/Icons/Stars";

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
  isUserInfo: {
    id: number;
    email: string;
    nickname: string;
    image: string;
    likes: number;
    bad: [];
    good: [];
    tags?: [];
    wines?: [];
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
  isUserInfo,
}: ReviewsProps) {
  const [deleteReview, setDeleteReview] = useState(false);
  const [allowedUser, setAllowedUser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  let login: any = sessionStorage.getItem("login");
  let userInfo: any = sessionStorage.getItem("userInfo");

  // * 댓글 수정함수
  // const setCommentUpdate = useCallback (
  //   () => {

  //   },
  //   [isUpdate],
  // )

  // * 댓글 삭제 함수
  const handleDeleteRewiew = async () => {
    setDeleteReview(true);
    await axios
      .delete(`${server}comment`, {
        data: { commentId: commentId },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((data) => {
        console.log(commentId);
        return handleComments();
      })
      // * 댓글 삭제 후 handleComments 함수 실행으로 commentsList 상태 변경해 재랜딩
      .catch((err) => {});
  };

  return (
    <li className="reviews" style={{ opacity: deleteReview ? "0" : "1" }}>
      <div className="reviewContent">
        <div>
          <div className="reviewWriter">작성자: {user.nickname}</div>
          <div className="review_date">{createdAt?.slice(0, 10)}</div>
        </div>

        <div className="reviewContent_btn">
          <div onClick={() => setIsUpdate(true)}>수정하기</div>
          <div onClick={() => handleDeleteRewiew()}>삭제하기</div>
        </div>
      </div>

      <div className="wineReview">{commentText}</div>

      <div className="reviewBtns">
        <div className="review_star">별점: {commentRating}</div>
        <div className="Likebtns">
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

        <ReplyBtn />
      </div>
    </li>
  );
}

export default Reviews;
