import React, { useState, useEffect, useCallback } from "react";
import RatingAvg from "../../atoms/Texts/RatingAvg";
import StarIconSolid from "../../atoms/Icons/StarIconSolid";
import StarIconRegular from "../../atoms/Icons/StarIconRegular";
interface Rating {
  rating_avg: number;
}

const Rating = ({ rating_avg }: Rating) => {
  let ratingArr: number[] = [];
  for (let i = 0; i < rating_avg; i++) {
    ratingArr.push(1);
  }

  // const [ratingArrState, setRatingArrState] = useState<number[]>(ratingArr);
  // console.log("rating_avg", rating_avg);
  // console.log("ratingArr", ratingArr);

  // useEffect(() => {
  //   makeRatingArr(rating_avg);
  // }, [rating_avg]);
  // const makeRatingArr = useCallback(
  //   (time: number) => {
  //     for (let i = 0; i < time; i++) {
  //       ratingArr.push(1);
  //     }
  //   },
  //   [ratingArr]
  // );
  // useEffect(() => {
  //   setRatingArrState(ratingArrState);
  // }, [ratingArrState]);

  return (
    <div className="mainWineRating">
      <div className="mainWineRatingAvg">
        <RatingAvg rating_avg={rating_avg} />
      </div>
      <div className="mainWineRatingStars">
        {ratingArr.length === 0 ? (
          <StarIconRegular />
        ) : (
          ratingArr.map((_, idx) => {
            return <StarIconSolid key={idx} />;
          })
        )}
      </div>
      <div className="mainWineRatingCounts">{/* <RatingCounts /> */}</div>
    </div>
  );
};

export default Rating;
