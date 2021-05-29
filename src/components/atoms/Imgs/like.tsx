import React, { useState, useMemo, useEffect } from "react";

const Like = () => {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <div onClick={handleLikeBtn} className={isLike ? "like" : "unlike"}></div>
  );
};

export default Like;
