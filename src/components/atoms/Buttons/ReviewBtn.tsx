import React from "react";

interface ReviewBtnProps {
  handleClick: (e: any) => void;
}

const ReviewBtn = ({ handleClick }: ReviewBtnProps) => {
  return (
    <button className="reviewBtn" onClick={(e) => handleClick(e)}>
      λκΈ μμ±
    </button>
  );
};

export default ReviewBtn;
