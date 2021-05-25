import React, { useRef } from "react";
import { useDisclosure, Button } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import MainTypeTag from "../../atoms/Tags/MainTypeTag";
import MainBodyTag from "../../atoms/Tags/MainBodyTag";

const MainLabel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        margin="0"
        width="70px"
        height="40px"
        border="0"
        cursor="pointer"
        clipPath="polygon(0 0, 100% 0%, 100% 100%, 0 100%, 30% 50%)"
        marginTop="20px"
        backgroundColor="wheat"
      >
        라벨
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor="wheat"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <DrawerCloseButton
            size="sm"
            height="20px"
            width="20px"
            position="absolute"
            right="5px"
          />
          <DrawerHeader>원하는 태그를 골라보세요</DrawerHeader>

          <DrawerBody>
            <MainTypeTag wineType={["레드", "화이트", "로제", "스파클링"]} />
            <MainBodyTag />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Exit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainLabel;
