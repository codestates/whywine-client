import React from "react";
import moment from "moment";

const ReviewTime = () => {
  return (
    <div>
      <time>{moment(`${moment()}`).fromNow()}</time>
    </div>
  );
};

export default ReviewTime;
