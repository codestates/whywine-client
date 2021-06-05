import React, { useState, useRef, useEffect } from "react";
import WineModal from "../Modal/WineModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface wineData {
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
  const [isOpen, setIsOpen] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const ModalEl: any = useRef();

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

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <li>
      {searchWine === undefined ? null : (
        <div className={isOpen ? "openWineModal modal" : "modal"}>
          <WineModal
            price={searchWine.price}
            tags={searchWine.tags}
            id={searchWine.id}
            sort={searchWine.sort}
            likeCount={searchWine.likeCount}
            description={searchWine.description}
            image={process.env.REACT_APP_WINE_IMAGE_URL + searchWine.image}
            name={searchWine.name}
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

export default MainWineSearchCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
