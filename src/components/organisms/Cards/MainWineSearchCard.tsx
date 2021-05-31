import React, { useState, useRef, useEffect } from "react";
import ClickWine from "../../atoms/Imgs/ClickWine";
import WineModal from "../Modal/WineModal";

import Rating from "../Ratings/Rating";

interface wineData {
  // name: string;
  // photo: HTMLImageElement; //? 그냥 사진을 바로 불러와도 되려나
  // like: number;
  // tag: any;
  // onClick: () => void;
  searchWine: any;
}
let name: string,
  id: number,
  likeCount: number,
  description: string,
  image: string,
  price: number,
  sort: string,
  tags: object[];
const MainWineSearchCard = ({ searchWine }: wineData) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(true);

  const ModalEl: any = useRef();
  const handleIsClicked = () => {
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

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <div>
      <div className={isOpen ? "openModal modal" : "modal"}>
        <WineModal ModalEl={ModalEl} />
      </div>
      {searchWine === undefined ? null : (
        <li className="mainWineCard" onClick={handleIsClicked}>
          <Rating />
          <div className="mainWineProfile">
            <img src={image} alt="와인" />
            <div className="mainWineContent">
              <h2>{name}</h2>
              {/* <span>{year}</span> */}
              <p>{description}</p>
            </div>
          </div>

          <div className="mainWineData">
            <div className="mainWineType">
              {sort === "red"
                ? " #레드"
                : sort === "white"
                ? " #화이트"
                : sort === "rose"
                ? " #로제"
                : sort === "sparkling"
                ? " #스파클링"
                : null}
            </div>
            <div className="mainWineLikeTagBox">
              <div className="mainWineTag">
                {tags.map((tag: any) => {
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
                })}
              </div>
            </div>
            <ClickWine isClicked={isClicked} />
          </div>

          <ClickWine isClicked={isClicked} />
        </li>
      )}
    </div>
  );
};

export default MainWineSearchCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
