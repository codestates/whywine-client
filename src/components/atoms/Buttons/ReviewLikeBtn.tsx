import React from "react";

interface Props {
  like: boolean;
}

const ReviewLikeBtn = ({ like }: Props) => {
  return (
    <div>
      {like ? (
        <button className="reviewLikeBtn">좋아요</button>
      ) : (
        <button className="reviewLikeBtn">싫어요</button>
      )}
    </div>
  );
};

export default ReviewLikeBtn;
