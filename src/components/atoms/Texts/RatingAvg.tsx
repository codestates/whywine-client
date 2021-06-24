import React from "react";

interface Rating {
  rating_avg: number;
}
const RatingAvg = ({ rating_avg }: Rating) => {
  return (
    <div>
      <h2>{rating_avg === undefined ? null : rating_avg.toFixed(1)}</h2>
    </div>
  );
};

export default RatingAvg;
