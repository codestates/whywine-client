import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import axios from "axios";
import Stars from "../../atoms/Icons/Stars";

require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

type Comment = {
  user: string;
  text: string;
};

interface ReviewsProps {
  commentText: string;
  commentRating: number;
  key: number;
  commentId: number;
  bad_count: number;
  good_count: number;
  createdAt?: string;
  updatedAt?: string;
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
  updatedAt,
  user,
  handleComments,
  isUserInfo,
}: ReviewsProps) {
  const [deleteReview, setDeleteReview] = useState(false);
  const [allowedUser, setAllowedUser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [comment, setComment] = useState<Comment>({
    // ! 현재 코멘트 상태
    user: user.nickname,
    text: "",
  });

  const handleSubmitClick = async () => {
    // * comment 상태 초기화
    await axios
      .put(
        `${server}comment`,
        {
          rating: commentRating,
          text: comment.text,
          commentId: commentId,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => {
        HandlingUpdate();
        handleComments();
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  const handleTextArea = (e: any) => {
    setComment({
      text: `${e.target.value}`,
      user: user.nickname,
    });
  };
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
        return handleComments();
      })
      // * 댓글 삭제 후 handleComments 함수 실행으로 commentsList 상태 변경해 재랜딩
      .catch((err) => {});
  };

  useEffect(() => {
    if (user.id === isUserInfo.id) {
      setAllowedUser(() => true);
    }
  }, []);
  // useEffect(() => {}, [isUpdate]);
  const HandlingUpdate = (e?: any) => {
    if (isUpdate) {
      setIsUpdate(false);
    } else if (!isUpdate) {
      setIsUpdate(true);
    }
  };

  return (
    <li className="reviews" style={{ opacity: deleteReview ? "0" : "1" }}>
      <div className="reviewContent">
        <div>
          <div className="reviewWriter">작성자: {user.nickname}</div>
          {updatedAt !== createdAt ? (
            <div className="review_date">수정됨: {updatedAt?.slice(0, 10)}</div>
          ) : (
            <div className="review_date">{createdAt?.slice(0, 10)}</div>
          )}
        </div>

        <div className="reviewContent_btn">
          {allowedUser ? (
            <>
              {isUpdate ? (
                <>
                  <div onClick={() => HandlingUpdate()}>취소</div>
                  <div onClick={() => handleDeleteRewiew()}>삭제하기</div>
                </>
              ) : (
                <>
                  {" "}
                  <div onClick={(e) => HandlingUpdate(e)}>수정하기</div>
                  <div onClick={() => handleDeleteRewiew()}>삭제하기</div>
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
      {isUpdate ? (
        <textarea
          className="wineReviewUpdate"
          onChange={(e) => handleTextArea(e)}
        ></textarea>
      ) : (
        <div className="wineReview">{commentText}</div>
      )}

      <div className="reviewBtns">
        <div>
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
        </div>
        <div className="updateBtn">
          {isUpdate ? (
            <ReviewBtn handleClick={() => handleSubmitClick()} />
          ) : (
            <>{allowedUser ? null : <ReplyBtn />}</>
          )}
        </div>
      </div>
    </li>
  );
}

export default Reviews;
