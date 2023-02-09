import React from "react";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import UsageInfoModal from "../UsageInfoModal/UsageInfoModal";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type Props = {
  messageBody: React.ReactNode | React.ReactNode[];
  title: string;
};

const UsageInfo = ({ title, messageBody }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="unstyled"
        size="xs"
        aria-label="Usage info"
        icon={<InfoOutlineIcon boxSize={4} color="white" />}
      />
      <UsageInfoModal
        title={title}
        body={messageBody}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default UsageInfo;
