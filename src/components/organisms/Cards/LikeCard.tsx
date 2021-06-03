import React, { useState, useEffect, useRef } from "react";
import Rating from "../Ratings/Rating";
import WineModal from "../Modal/WineModal";
import wineSample from "../../../img/wine_sample.webp";

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
  tags: object[];
const LikeCard = ({ userLikeWines }: WineData) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();

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
  const handleUploadImg = () => {
    setTimeout(() => setIsUpload(true), 300);
  };
  useEffect(() => {
    handleUploadImg();
    return () => {
      setIsUpload(false);
    };
  }, [tags]);

  const handleIsClicked = () => {
    console.log(userLikeWines);
    setIsOpen(true);
    setIsClicked(true);
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

  return (
    <li>
      <div className={isOpen ? "openModal modal" : "modal"}>
        <WineModal
          price={price}
          tags={tags}
          id={id}
          sort={sort}
          likeCount={likeCount}
          description={description}
          image={image}
          name={name}
          ModalEl={ModalEl}
        />
      </div>

      <div className="mainLikeCard" onClick={handleIsClicked}>
        <div className="mainWineProfile">
          <div className="mainLikeContent">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="wineLikeImgBox">
          <img
            src={image}
            alt="와인"
            className={isUpload ? "wineLikeImg" : "wineLikeImgSample"}
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
                {/* {tags.map((tag: any) => {
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
                })} */}
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
