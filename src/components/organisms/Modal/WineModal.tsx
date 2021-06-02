import React, { useState, useEffect } from "react";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import Like from "../../atoms/Imgs/like";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Imgs/Stars";
import Reviews from "../Reviews/Reviews";
import axios from "axios";

require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000";

interface Props {
  ModalEl: any;
  name: string;
  id: number;
  likeCount: number;
  description: string;
  image: string;
  price: number;
  sort: string;
  tags: object[];
}
type Comment = {
  user: string;
  text: string;
  rating: number;
};

function WineModal({
  ModalEl,
  name,
  id,
  likeCount,
  description,
  image,
}: Props) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [userName, setUserName] = useState("게스트");
  const [comments, setComments] = useState([]);
  // ! 랜더링 될 코멘트들 [{},{},{}....]
  const [comment, setComment] = useState<Comment>({
    // ! 현재 코멘트 상태
    user: userName,
    text: "",
    rating: rating,
  });

  const handleComments = async () => {
    const data: any = await axios.get(`${server}/comment?wineid=${id}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    console.log("댓글 서버요청 :", JSON.stringify(data.data.data.comments));
    setComments(data.data.data.comments);
    console.log(comments[0]);
  };

  const handleTextArea = (e: any) => {
    setComment({
      text: `${e.target.value}`,
      user: `${userName}`,
      rating: rating,
    });
  };
  // * TextArea 값 상태

  const handleClick = async () => {
    // * comment 상태 초기화

    await axios
      .post(
        `${server}/comment`,
        {
          rating: comment.rating,
          wineId: id,
          text: comment.text,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => console.log("성공적 요청"))
      .catch((err) => console.dir(err));

    if (comment.text !== "") {
      setComment({
        text: "",
        user: `${userName}`,
        rating: 0,
      });
    } else if (comment.text === "") {
      setComment({
        text: "",
        user: `${userName}`,
        rating: 0,
        // ! 댓글을 작성해달라는 문구 필요
      });
      console.log("nowComment: ", comment.text);
    }
  };
  // * 댓글 작성버튼을 누르면 랜딩시켜줄 comments에 작성된 comment가 들어감

  useEffect(() => {
    handleComments();
    if (localStorage.getItem("userInfo")) {
      let userInfo: any = localStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      setUserName(`${userInfo.nickname}`);
    } else {
      setUserName("게스트");
      // * 로컬스토리지 유저인포가 없으면 유저이름을 "게스트"값으로 돌린다.
    }
  }, []);
  // * 랜딩될떄 로컬스토리지에 있는 유저인포에서 유저 닉네임 가져옴

  return (
    <section ref={ModalEl} className="winemodal">
      <div className="likeBox">
        <div className="reviewHeader">
          <ReviewWineName name={name} />
        </div>

        <div className="wineimg">
          <img src={image} alt="와인" />
        </div>

        <Like id={id} />

        <div style={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((idx) => {
            return (
              <Stars
                key={idx}
                idx={idx}
                rating={rating}
                hoverRating={hoverRating}
                setRating={setRating}
                setHoverRating={setHoverRating}
              />
            );
          })}
        </div>

        <div>{likeCount}명이 찜한 와인입니다!</div>
      </div>

      <div className="hrDiv">
        <hr className="hr2"></hr>
      </div>

      <div className="review">
        <div className="reviewInput" onSubmit={(e) => e.preventDefault()}>
          <ReviewInput handleTextArea={handleTextArea} comment={comment} />
          <ReviewBtn handleClick={handleClick} />
        </div>
        <ul>
          {comments.map((el: any, idx) => {
            <>
              <div>랜딩안되냐???</div>
              <Reviews id={id} comment={el} key={idx} />
            </>;
          })}
        </ul>
      </div>
    </section>
  );
}

export default WineModal;
