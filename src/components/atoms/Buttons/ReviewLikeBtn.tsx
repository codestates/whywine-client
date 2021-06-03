import React from "react";

interface Props {
  like: boolean;
  unLike: boolean;
}

const ReviewLikeBtn = ({ like, unLike }: Props) => {
  return (
    <div>
      {/* <button className="reviewLikeBtn">좋아요</button> */}
      {like}
    </div>
  );
};

export default ReviewLikeBtn;
