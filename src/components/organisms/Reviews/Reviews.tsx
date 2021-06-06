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
  const [isGuset, setIsGuest] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  let login: any = sessionStorage.getItem("login");
  let userInfo: any = sessionStorage.getItem("userInfo");

  useEffect(() => {
    if (user.id == null) {
      // * 유저아이디와 댓글을 작성한 유저아이다가 다르면 각 리뷰에선 게스트 취급
      setIsGuest(true);
    }
    if (!JSON.parse(login)) {
      // * 로그인 상태가 아니면 게스트
      setIsGuest(true);
    }
  }, []);

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
          <div
            onClick={() => setIsUpdate(true)}
            style={{ opacity: isGuset ? "0" : "1" }}
          >
            수정하기
          </div>
          <div
            onClick={() => handleDeleteRewiew()}
            style={{ opacity: isGuset ? "0" : "1" }}
          >
            삭제하기
          </div>
        </div>
      </div>

      <div className="wineReview">{commentText}</div>

      <div className="reviewBtns">
        <div className="review_star">별점: {commentRating}</div>
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
        <ReplyBtn />
      </div>
    </li>
  );
}

export default Reviews;
