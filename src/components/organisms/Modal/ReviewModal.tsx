import React from "react";
import ReviewCon from "../Containers/ReviewCon";
import ReviewWineCon from "../Containers/ReviewWineCon";
import MainWineCard from "../Cards/MainWineCard";
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

const ReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>와인상세</Button>

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
          backgroundColor="tomato"
          width="100%"
          height="600px"
          maxWidth="935px"
          position="absolute"
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
    </>
  );
};

export default ReviewModal;
