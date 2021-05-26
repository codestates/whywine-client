import React from "react";
import RatingAvg from "../../atoms/Texts/RatingAvg";
import RatingCounts from "../../atoms/Texts/RatingCounts";
import StarIconSolid from "../../atoms/Imgs/StarIconSolid";

const Rating = () => {
  return (
    <div className="mainWineRating">
      <div className="mainWineRatingAvg">
        <RatingAvg />
      </div>
      <div className="mainWineRatingStars">
        {[1, 2, 3, 4, 5].map((star) => {
          return <StarIconSolid />;
        })}
      </div>
      <div className="mainWineRatingCounts">
        <RatingCounts />
      </div>
    </div>
  );
};

export default Rating;