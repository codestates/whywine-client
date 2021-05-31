import React, { useState } from "react";
import ReviewWineCon from "../Containers/ReviewWineCon";
import ReviewCon from "../Containers/ReviewCon";
import ClickWine from "../../atoms/Imgs/ClickWine";
import UnLike from "../../atoms/Imgs/unLike";
import Rating from "../Ratings/Rating";
import "dotenv/config";
//* chakra-modal *//
import { useDisclosure, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AnyARecord } from "dns";

interface WineData {
  // name: string;
  // photo: HTMLImageElement; //? 그냥 사진을 바로 불러와도 되려나
  // like: number;
  // tag: any;
  // onClick: () => void;
  randomWine: any;
}
let name: string,
  likeCount: number,
  description: string,
  image: string,
  price: number,
  sort: string,
  tags: object[];
const MainWineCard = ({ randomWine }: WineData) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (randomWine !== undefined) {
    name = randomWine.name;
    likeCount = randomWine.likeCount;
    description = randomWine.description;
    image = process.env.REACT_APP_WINE_IMAGE_URL + randomWine.image;
    price = randomWine.price;
    tags = randomWine.tags;
    sort = randomWine.sort;
  }
  const handleIsClicked = () => {
    onOpen();
    setIsClicked(true);
  };
  //* 이름에서 연도 추출
  // let splitName = name.split(" ");
  // let year = "";
  // for (let i = splitName.length - 1; i < splitName.length; i++) {
  //   year = splitName[i];
  // }
  const handleTagsName = (name: string) => {};

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <div>
      {randomWine === undefined ? null : (
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
          <div className="wineReviewModal">
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay
                backgroundColor="rgb(138, 138, 138, 0.5)"
                width="100%"
                height="100%"
                position="absolute"
              />
              <ModalCloseButton
                width="30px"
                height="30px"
                position="absolute"
                right="0"
                top="0"
                marginTop="80px"
              />
              <ModalContent
                backgroundColor="wheat"
                width="100%"
                height="600px"
                maxWidth="935px"
                position="absolute"
                margin="auto"
                top="20%"
                left="25%"
              >
                <ModalBody>
                  <div className="reviewModal">
                    <ReviewWineCon />
                    <ReviewCon />
                  </div>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </li>
      )}
    </div>
  );
};

export default MainWineCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
