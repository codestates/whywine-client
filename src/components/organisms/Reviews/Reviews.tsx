import React, { useState, useEffect } from "react";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import axios from "axios";
require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

function Reviews() {
  let userInfo: any = localStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);

  // const data = axios.get(`${server}/comment?wineid=[와인아이디]`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${JSON.parse(token)}`,
  //   },
  //   withCredentials: true,
  // });

  return (
    <ul className="reviewBox">
      <li className="reviews">
        <div className="reviewContent">
          <a href="#" className="reviewWriter">
            {userInfo.nickname}
          </a>
          <span className="wineReview">와인 리뷰</span>
          <ReviewTime />
        </div>

        <div className="reviewBtns">
          <ReviewLikeBtn />
          <ReplyBtn />
        </div>
      </li>
    </ul>
  );
}

export default Reviews;
