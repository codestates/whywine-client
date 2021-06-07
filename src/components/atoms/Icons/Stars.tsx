import React, { useEffect, useMemo, useState } from "react";
import StarIcon from "./StarIcon";

interface Props {
  idx: number;
  rating: number;
  hoverRating: number;
  setRating: (rating: number) => void;
  setHoverRating: (rating: number) => void;
}

const Stars = ({
  idx,
  rating,
  hoverRating,
  setRating,
  setHoverRating,
}: Props) => {
  const isFill = useMemo(() => {
    if (hoverRating >= idx) {
      return true;
    } else if (!hoverRating && rating >= idx) {
      return true;
    }
    return false;
  }, [rating, hoverRating, idx]);

  useEffect(() => {}, [rating]);
  return (
    <div
      className="star"
      onMouseEnter={() => setHoverRating(idx)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(idx)}
    >
      <StarIcon isActive={isFill} />
    </div>
  );
};

export default Stars;
