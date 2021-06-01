import React, { TextareaHTMLAttributes, useState } from "react";

const ReviewInput = ({
  cols,
  rows,
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div>
      <textarea
        className="textarea"
        placeholder="리뷰 쓰기..."
        // cols="40"
        // rows="8"
      />
    </div>
  );
};

export default ReviewInput;
