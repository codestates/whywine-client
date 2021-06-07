import React from "react";
import axios from "axios";

require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

interface Props {
  like: boolean;
  good_count: number;
  handleComments: () => void;
  commentId: number;
}

const ReviewLikeBtn = ({
  like,
  good_count,
  handleComments,
  commentId,
}: Props) => {
  const handleLikeCount = async () => {
    await axios
      .post(
        `${server}comment/good`,
        { data: { commentId: commentId } },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )

      .then((data) => {
        console.dir(data);
        handleComments();
      })
      // * 댓글 삭제 후 handleComments 함수 실행으로 commentsList 상태 변경해 재랜딩
      .catch((err) => {
        console.dir(err);
      });
  };

  return (
    <div className="like_Btn">
      {like ? (
        <button onClick={() => handleLikeCount()} className="reviewLikeBtn">
          <i className="fas fa-thumbs-up"></i> : {good_count}
        </button>
      ) : (
        <button className="reviewLikeBtn">
          <i className="fas fa-thumbs-down"></i>
        </button>
      )}
    </div>
  );
};

export default ReviewLikeBtn;
