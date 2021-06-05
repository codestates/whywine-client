import React, { useState, useEffect, useRef } from "react";
import Rating from "../Ratings/Rating";
import WineModal from "../Modal/WineModal";
import dotenv from "dotenv";
import { LazyLoadImage } from "react-lazy-load-image-component";

dotenv.config();

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
  const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();

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
    setIsOpen(true);
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

  return (
    <li>
      {subWine === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            price={subWine.price}
            tags={subWine.tags}
            id={subWine.id}
            sort={subWine.sort}
            likeCount={subWine.likeCount}
            description={subWine.description}
            image={process.env.REACT_APP_WINE_IMAGE_URL + subWine.image}
            name={subWine.name}
            ModalEl={ModalEl}
          />
        </div>
      )}
      <div className="mainSearchCard" onClick={handleIsClicked}>
        <div className="mainSearchProfile">
          <LazyLoadImage
            src={image}
            effect="blur"
            // scrollPosition={scrollPosition}
            alt="와인"
            className={isUpload ? "wineMainImg" : "wineMainSample"}
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