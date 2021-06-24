import React from "react";

interface ReviewBtnProps {
  handleClick: (e: any) => void;
}

const ReviewBtn = ({ handleClick }: ReviewBtnProps) => {
  return (
    <button className="reviewBtn" onClick={(e) => handleClick(e)}>
      댓글 작성
    </button>
  );
};

export default ReviewBtn;
