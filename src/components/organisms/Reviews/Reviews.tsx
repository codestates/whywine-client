import React, { useState, useEffect } from "react";
import ReviewTime from "../../atoms/Texts/ReviewTime";
import ReviewLikeBtn from "../../atoms/Buttons/ReviewLikeBtn";
import ReplyBtn from "../../atoms/Buttons/ReplyBtn";
import axios from "axios";
require("dotenv").config();

const server = process.env.REACT_APP_API_SERVER;

interface UserInfoPrpos {
  bad: [];
  email: string;
  good: [];
  id: number;
  image: string;
  likes: number;
  nickname: string;
  tags: [];
  wines: [];
}
interface ReviewsProps {
  id: number;
  comment: string;
}

function Reviews({ id, comment }: ReviewsProps) {
  const [userInfo, setUserInfo] = useState<UserInfoPrpos>({
    bad: [],
    email: "",
    good: [],
    id: 999,
    image: "",
    likes: 0,
    nickname: "게스트",
    tags: [],
    wines: [],
  });
  // const [comment, setComment] = useState({
  //   text: "",
  // });

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      let userInfo: any = localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      setUserInfo(userInfo);
    }
    console.log("랜딩이 안되니???: ", comment);
  }, []);

  return (
    <li className="reviews">
      <div className="reviewContent">
        <div className="reviewWriter">{userInfo.nickname}</div>
        <span className="wineReview">{comment}</span>
        <ReviewTime />
      </div>

      <div className="reviewBtns">
        <ReviewLikeBtn />
        <ReplyBtn />
      </div>
    </li>
  );
}

export default Reviews;
