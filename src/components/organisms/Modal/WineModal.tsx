import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReviewBtn from "../../atoms/Buttons/ReviewBtn";
import Like from "../../atoms/Icons/like";
import ReviewInput from "../../atoms/Inputs/ReviewInput";
import ReviewWineName from "../../atoms/Texts/ReviewWineName";
import Stars from "../../atoms/Icons/Stars";
import Reviews from "../Reviews/Reviews";
import axios from "axios";
import SignInModal from "../Modal/SignInModal";
import Image from "../../atoms/Imgs/Image";
import wineSample from "../../../img/wine_sample.png";
import RatingAvg from "../../atoms/Texts/RatingAvg";
import Rating from "../../organisms/Ratings/ModalRating";
require("dotenv").config();
const server = process.env.REACT_APP_API_SERVER || "https://localhost:4000/";

interface UserInfoPrpos {
  id: number;
  email: string;
  nickname: string;
  image: string;
  likes: number;
  bad: [];
  good: [];
  tags?: [];
  wines?: [];
}

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
  rating_avg: number;
  randomWine: any;
  landingCommentList: any;
  handleComments: () => void;
}
type Comment = {
  user: string;
  text: string;
  rating: number;
};

function WineModal({
  price,
  tags,
  id,
  sort,
  likeCount,
  description,
  image,
  name,
  rating_avg,
  ModalEl,
  randomWine,
  landingCommentList,
  handleComments,
}: Props) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [userName, setUserName] = useState("게스트");
  const [signInOpen, setsSignIn] = useState(false);
  const [commentUpdate, setCommentUpdate] = useState(false);
  const [commentList, setCommentList] = useState<any[]>([]);
  // ! 랜더링 될 코멘트들 [{},{},{}....]
  const [iscomment, setIscomment] = useState(false);

  const [comment, setComment] = useState<Comment>({
    // ! 현재 코멘트 상태
    user: userName,
    text: "",
    rating: rating,
  });

  const handleTextArea = (e: any) => {
    setComment({
      text: `${e.target.value}`,
      user: `${userName}`,
      rating: rating,
    });
  };
  // * TextArea 값 상태

  const handleSubmitClick = async () => {
    // * comment 상태 초기화
    setIscomment(!iscomment);
    await axios
      .post(
        `${server}comment`,
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
      .then((data) => {
        handleComments();
      })
      .catch((err) => {
        switch (err.response.data.message) {
          case "rating is empty":
            return alert("평점을 입력해주세요");
          case "text is empty":
            return alert("리뷰가 비어있습니다");
        }
      });

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
      });
    }
  };
  // * 댓글 작성버튼을 누르면 랜딩시켜줄 comments에 작성된 comment가 들어감

  const handleCommentUpdate = async () => {};

  useEffect(() => {
    setCommentList(landingCommentList);

    let login: any = sessionStorage.getItem("login");
    if (JSON.parse(login) && sessionStorage.getItem("userInfo")) {
      let userInfo: any = sessionStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      setUserName(`${userInfo.nickname}`);
    } else if (!JSON.parse(login)) {
      setUserName("게스트");
      // * 세션 스토리지 로그인 상태가 거짓이면 유저이름을 "게스트"값으로 돌린다.
    }
    if (userName === "게스트") {
    }

    if (userName !== "게스트") {
      return () => setCommentList(landingCommentList);
    }
    setIscomment(!iscomment);
  }, []);

  useEffect(() => {
    if (userName === "게스트") {
    }

    if (userName !== "게스트") {
      setCommentList(landingCommentList);
    }
  });

  // * 랜딩될떄 세션 스토리지에 있는 유저인포에서 유저 닉네임 가져옴

  // const RendigComment = useMemo(() => handleComments, [comments]);

  return (
    <section ref={ModalEl} className="winemodal">
      <div className="reviewHeader">
        <ReviewWineName name={name} />
      </div>
      <div className="hrDiv">
        <hr className="hr2"></hr>
      </div>
      <div className="likeBox">
        <div>
          <div className="wineimg">
            <Image src={image} alt="와인" placeholderImg={wineSample} />
            <Like id={id} />
            <div className="reviewHeader_">
              <div>{likeCount}Likes!</div>
              <div>{price}WON</div>
              <Rating rating_avg={rating_avg} />
              <hr></hr>
            </div>
          </div>
          <div className="modalDescription">{description}</div>
        </div>
      </div>

      {userName === "게스트" ? (
        <div className="guestReview">
          <div className="guestLoginModal">
            <div>댓글을 작성하려면 로그인을 하셔야합니다.</div>
            <div onClick={() => setsSignIn(true)} style={{ cursor: "pointer" }}>
              로그인 바로가기
            </div>
          </div>

          <SignInModal
            isOpen={signInOpen}
            closeModal={() => setsSignIn(false)}
          />
          <ul className="reviewUl">
            {commentList.map((el: any) => {
              return (
                <Reviews
                  commentText={el.text}
                  commentRating={el.rating}
                  key={el.id}
                  commentId={el.id}
                  bad_count={el.bad_count}
                  good_count={el.good_count}
                  createdAt={el.createdAt}
                  user={el.user}
                  handleComments={handleComments}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="review">
          <div className="reviewInput">
            <div>
              <ReviewInput handleTextArea={handleTextArea} comment={comment} />
              <div className="stars_btn">
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
                <ReviewBtn handleClick={() => handleSubmitClick()} />
              </div>
            </div>
          </div>

          <ul className="reviewUl">
            {commentList.map((el: any) => {
              return (
                <Reviews
                  commentText={el.text}
                  commentRating={el.rating}
                  key={el.id}
                  commentId={el.id}
                  bad_count={el.bad_count}
                  good_count={el.good_count}
                  createdAt={el.createdAt}
                  user={el.user}
                  handleComments={() => handleComments()}
                />
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}

export default WineModal;
