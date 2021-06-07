import React, { useState, useRef, useEffect } from "react";
import WineModal from "../Modal/WineModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import wineSample from "../../../img/wine_sample.png";
import Image from "../../atoms/Imgs/Image";
import axios from "axios";
import dotenv from "dotenv";
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

interface wineData {
  searchWine: any;
}

let name: string,
  id: number,
  likeCount: number,
  description: string,
  image: string,
  price: string,
  sort: string,
  tags: object[],
  rating_avg: number;

const MainWineSearchCard = ({ searchWine }: wineData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();
  const [commentList, setCommentList] = useState<any[]>([]);
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

  const landingHandleComments = async () => {
    if (searchWine) {
      await axios
        .get(`${server}comment?wineid=${searchWine.id}`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((data) => {
          return setCommentList(data.data.data.comments);
        })
        .catch((err) => console.dir(err));
    }
  };

  //확인
  if (searchWine) {
    name = searchWine.name;
    id = searchWine.id;
    likeCount = searchWine.likeCount;
    description = searchWine.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + searchWine.image;
    price = searchWine.price;
    tags = searchWine.tags;
    sort = searchWine.sort;
  }

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

  const handleIsClicked = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (e: any) => {
    if (isOpen && !ModalEl.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    if (JSON.parse(login) && sessionStorage.getItem("userInfo")) {
    }
    let userInfo: any = sessionStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    setIsUserInfo(userInfo);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });
  const closeModal = () => {
    setIsOpen(false);
  };
  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <li>
      {searchWine === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            closeModal={closeModal}
            ModalOpen={isOpen}
            handleComments={landingHandleComments}
            landingCommentList={commentList}
            randomWine={searchWine}
            isUserInfo={isUserInfo}
            image={process.env.REACT_APP_WINE_IMAGE_URL + searchWine.image}
            ModalEl={ModalEl}
          />
        </div>
      )}

      <div className="searchCard" onClick={handleIsClicked}>
        <div className="searchProfile">
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
            className="wineSearchImg"
            alt="와인"
            placeholderImg={wineSample}
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

export default MainWineSearchCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
