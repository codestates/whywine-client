import React, { useState } from "react";
import photo from "../../../img/whywine_redWine_sample.png";
import ReviewWineCon from "../Containers/ReviewWineCon";
import ReviewCon from "../Containers/ReviewCon";
import ClickWine from "../../atoms/Imgs/ClickWine";

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

const MainWineCard: React.FC<wineData> = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIsClicked = () => {
    onOpen();
    setIsClicked(true);
  };
  //! 와인 데이터를 받아 올 때 처음 와인만 따로 랜더하고 나머지 맵핑
  return (
    <div className="mainWineCard" onClick={handleIsClicked}>
      <img src={photo} alt="와인" className="mainWinePhoto" />
      <div className="mainWineData">
        <div className="mainWineNameBox">
          <div className="mainWineName">Lupi Rezerva</div>
          <div className="mainWineYear">2016</div>
        </div>

        <div className="mainWineLikeTagBox">
          <div className="mainWineLike">좋아요: 100</div>
          <div className="mainWineTag">#레드#씁쓸한#인기있는</div>
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
    </div>
  );
};

export default MainWineCard;

// TODO: 와인 뿌려주는 props에 따라 사진과 설명 별점 등을 다르게 설정
