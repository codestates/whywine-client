import React, { useState } from "react";
import photo from "../../../img/whywine_redWine_sample.png";
import ReviewWineCon from "../Containers/ReviewWineCon";
import ReviewCon from "../Containers/ReviewCon";
import ClickWine from "../../atoms/Imgs/ClickWine";
import UnLike from "../../atoms/Imgs/unLike";
import Rating from "../Ratings/Rating";

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

interface wineData {
  // name: string;
  // photo: HTMLImageElement; //? 그냥 사진을 바로 불러와도 되려나
  // like: number;
  // tag: any;
  // onClick: () => void;
}

const MainWineSearchCard: React.FC<wineData> = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIsClicked = () => {
    onOpen();
    setIsClicked(true);
  };

  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <li className="mainWineSearchCard" onClick={handleIsClicked}>
      {/* <Rating /> */}
      <div className="mainWineSearchProfile">
        <img src={photo} alt="와인" />
      </div>

      <div className="mainWineSearchData">
        <div className="mainWineSearchContent">
          <h2>Lupi Rezerva</h2>
          <span>2016</span>
        </div>
        {/* <div className="mainWineLikeTagBox">
          <div className="mainWineTag">#레드 #씁쓸한 #인기있는</div>
        </div> */}
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
  );
};

export default MainWineSearchCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
