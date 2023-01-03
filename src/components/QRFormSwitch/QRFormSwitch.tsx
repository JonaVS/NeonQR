import { Flex, FlexProps, FormLabel, Switch, Text } from "@chakra-ui/react";

type Props = FlexProps & {
  text: string
  idForLabel: string 
}

const shadowColor = "#d69ef7"

const QRFormSwitch = ({text, idForLabel, ...props}: Props) => {
  return (
    <Flex {...props}>
      <FormLabel htmlFor={idForLabel}>
        <Text
          as="span"
          textShadow={`0 0 5px ${shadowColor}, 0 0 5px ${shadowColor}`}
          fontWeight="bold"
        >
          {text}
        </Text>
      </FormLabel>
      <Switch id={idForLabel} size="lg" colorScheme="teal" />
    </Flex>
  );
};

export default QRFormSwitch;
