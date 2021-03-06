import React, { useState, useEffect, useRef, useCallback } from "react";
import Rating from "../Ratings/Rating";
import WineModal from "../Modal/WineModal";
import wineSample from "../../../img/wine_sample.png";
import dotenv from "dotenv";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../../atoms/Imgs/Image";
import axios from "axios";

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
  subWine: any;
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

const MainSubWineCard = ({ subWine }: WineData) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();
  const [commentList, setCommentList] = useState<any[]>([]);
  const [overlapUser, setOverlapUser] = useState(false);
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

  //확인 확인
  if (subWine) {
    name = subWine.name;
    id = subWine.id;
    likeCount = subWine.likeCount;
    description = subWine.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + subWine.image;
    price = subWine.price;
    tags = subWine.tags;
    sort = subWine.sort;
    rating_avg = subWine.rating_avg;
  }
  const landingHandleComments = useCallback(() => {
    if (subWine) {
      axios
        .get(`${server}comment?wineid=${subWine.id}`, {
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
  }, []);

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
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li>
      {subWine === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            setOverlapUser={setOverlapUser}
            overlapUser={overlapUser}
            closeModal={closeModal}
            ModalOpen={isOpen}
            handleComments={() => landingHandleComments()}
            landingCommentList={commentList}
            isUserInfo={isUserInfo}
            randomWine={subWine}
            image={process.env.REACT_APP_WINE_IMAGE_URL + subWine.image}
            ModalEl={ModalEl}
          />
        </div>
      )}
      <div className="mainSearchCard" onClick={handleIsClicked}>
        <div className="mainSearchProfile">
          {/* <LazyLoadImage
            src={image}
            effect="blur"
            placeholderSrc={wineSample}
            // scrollPosition={scrollPosition}
            alt="와인"
            className={isUpload ? "wineMainImg" : "wineMainSample"}
          /> */}
          <Image
            src={image}
            placeholderImg={wineSample}
            alt="와인"
            className={"wineMainImg"}
          />
          <div className="mainSearchContent">
            <div>{name}</div>
            {description.length > 120 ? (
              <p className="moreThanDes">{description}</p>
            ) : (
              <p className="lessThanDes">{description}</p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MainSubWineCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
