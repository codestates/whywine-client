import RatingAvg from "../../atoms/Texts/RatingAvg";
import StarIconSolid from "../../atoms/Icons/StarIconSolid";
import StarIconRegular from "../../atoms/Icons/StarIconRegular";

interface RatingProps {
  rating_avg: number;
}

const Rating = ({ rating_avg }: RatingProps) => {
  let ratingArr: number[] = [];
  for (let i = 0; i < rating_avg - 0.5; i++) {
    ratingArr.push(1);
  }

  return (
    <div className="ModalWineRating">
      <div className="ModalWineRatingAvg">
        <RatingAvg rating_avg={rating_avg} />
      </div>
      <div className="ModalWineRatingStars">
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
