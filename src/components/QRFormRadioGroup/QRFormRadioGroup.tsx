import React from "react";
import { RadioGroup, RadioGroupProps, Stack } from "@chakra-ui/react";

type Props = RadioGroupProps;

const shadowColor = "#d69ef7";

const QRFormRadioGroup = ({
  children,
  value,
  onChange,
  defaultValue,
  isDisabled,
}: Props) => {
  return (
    <RadioGroup
      fontFamily="Bakbak One"
      textShadow={`0 0 5px ${shadowColor}, 0 0 5px ${shadowColor}`}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
    >
      <Stack>{children}</Stack>
    </RadioGroup>
  );
};

export default QRFormRadioGroup;
