import React, { useState, useEffect, useRef } from "react";
import Rating from "../Ratings/Rating";
import WineModal from "../Modal/WineModal";
import axios from "axios";
import dotenv from "dotenv";
import Image from "../../atoms/Imgs/Image";
import wineSample from "../../../img/wine_sample.png";

require("dotenv").config();

dotenv.config();
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

interface WineData {
  userLikeWines: any;
  key: number;
}
let name: string,
  id: number,
  likeCount: number,
  description: string,
  image: string,
  price: number,
  sort: string,
  tags: object[],
  rating_avg: number;

const LikeCard = ({ userLikeWines }: WineData) => {
  const [overlapUser, setOverlapUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [commentList, setCommentList] = useState<any[]>([]);
  const ModalEl: any = useRef();
  const [isUserInfo, setIsUserInfo] = useState<UserInfoPrpos>({
    id: 0,
    email: "",
    nickname: "",
    image: "",
    likes: 0,
    bad: [],
    good: [],
    tags: [],
    wines: [],
  });
  // 확인 확인
  if (userLikeWines) {
    name = userLikeWines.name;
    id = userLikeWines.id;
    likeCount = userLikeWines.likeCount;
    description = userLikeWines.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + userLikeWines.image;
    price = userLikeWines.price;
    tags = userLikeWines.tags;
    sort = userLikeWines.sort;
  }

  const landingHandleComments = async () => {
    if (userLikeWines) {
      await axios
        .get(`${server}comment?wineid=${userLikeWines.id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          setCommentList(data.data.data.comments);
          if (data.data.data.comments) {
            for (let i = 0; i < data.data.data.comments.length; i++) {
              if (
                isUserInfo.nickname === data.data.data.comments[i].user.nickname
              ) {
                setOverlapUser(true);
              }
            }
          }
        })
        .catch((err) => console.dir(err));
    }
  };
  const handleUploadImg = () => {
    setTimeout(() => setIsUpload(true), 300);
  };
  useEffect(() => {
    handleUploadImg();
    return () => {
      setIsUpload(false);
    };
  }, [tags]);

  let login: any = sessionStorage.getItem("login");
  useEffect(() => {
    if (JSON.parse(login) && sessionStorage.getItem("userInfo")) {
      let userInfo: any = sessionStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      setIsUserInfo(() => userInfo);
    }
  }, []);

  useEffect(() => {
    if (JSON.parse(login) && sessionStorage.getItem("userInfo")) {
    }
    let userInfo: any = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    setIsUserInfo(userInfo);
  }, [isOpen]);

  const handleIsClicked = () => {
    setIsOpen(true);
    landingHandleComments();
  };

  const handleClickOutside = (e: any) => {
    if (isOpen && !ModalEl.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li>
      {userLikeWines === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            overlapUser={overlapUser}
            closeModal={closeModal}
            ModalOpen={isOpen}
            handleComments={landingHandleComments}
            landingCommentList={commentList}
            isUserInfo={isUserInfo}
            randomWine={userLikeWines}
            image={image}
            ModalEl={ModalEl}
          />
        </div>
      )}

      <div className="mainLikeCard" onClick={handleIsClicked}>
        <div className="mainWineProfile">
          <div className="mainLikeContent">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="wineLikeImgBox">
          <Image
            src={image}
            alt="와인"
            className={isUpload ? "wineLikeImg" : "wineLikeImgSample"}
            placeholderImg={wineSample}
          />
          <div className="wineLikeData">
            <div className="mainWineType">
              {sort === "red"
                ? " 레드"
                : sort === "white"
                ? " 화이트"
                : sort === "rose"
                ? " 로제"
                : sort === "sparkling"
                ? " 스파클링"
                : null}
            </div>
            <div className="mainWineLikeTagBox">
              <div className="mainWineTag">
                {tags
                  ? tags.map((tag: any) => {
                      switch (tag.name) {
                        case "body_light":
                          return " #가벼운";
                        case "body_medium":
                          return "";
                        case "body_bold":
                          return " #무거운";
                        case "tannins_smooth":
                          return " #부드러운";
                        case "tannins_medium":
                          return "";
                        case "tannins_tannic":
                          return " #떫은";
                        case "acidity_soft":
                          return " #산미가 적은";
                        case "acidity_medium":
                          return "";
                        case "acidity_acidic":
                          return " #산미가 높은";
                        case "sweetness_dry":
                          return " #씁쓸한";
                        case "sweetness_medium":
                          return "";
                        case "sweetness_sweet":
                          return "#달달한";
                        default:
                          break;
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LikeCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
