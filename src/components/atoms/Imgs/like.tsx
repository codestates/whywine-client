import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

const Like = () => {
  const [isLike, setIsLike] = useState(false);

  const handleLikeBtn = async () => {
    setIsLike(!isLike);
    if (isLike) {
      await axios.post(
        `${server}/user/like`,
        {
          /*wineid*/
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } else {
      await axios.post(
        `${server}/user/unlike`,
        {
          /*wineid*/
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    }
  };

  return (
    <div onClick={handleLikeBtn} className={isLike ? "like" : "unlike"}></div>
  );
};

export default Like;
