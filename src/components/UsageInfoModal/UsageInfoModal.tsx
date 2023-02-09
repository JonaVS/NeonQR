import React from "react";
import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseModalProps,
} from "@chakra-ui/react";

type Props = UseModalProps & {
  body?: React.ReactNode[]  | React.ReactNode,
  title?: string
}

const UsageInfoModal = ({isOpen, onClose, title="Default title", body="Default body"}: Props) => {
  return (
    <>
      <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          backgroundColor="#8c00ff"
          boxShadow="0 0 5px #8c00ff, 0 0 10px #8c00ff"
          textShadow="0 0 5px #f8f8f8"
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            <Button boxShadow="0 0 10px #5a5858" onClick={onClose}>
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default UsageInfoModal;
