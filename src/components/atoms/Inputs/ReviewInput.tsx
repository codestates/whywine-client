import React, { TextareaHTMLAttributes, useState } from "react";

interface ReviewInputProps {
  handleTextArea: (e: any) => void;
  comment: { user: string; text: string; rating: number };
}

const ReviewInput = ({ handleTextArea, comment }: ReviewInputProps) => {
  return (
    <textarea
      value={comment.text}
      onChange={handleTextArea}
      className="textarea"
      placeholder="리뷰 쓰기..."
      name="댓글"
      cols={30}
      rows={10}
    >
      {comment.text}
    </textarea>
  );
};

export default ReviewInput;
