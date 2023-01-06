import { Flex, FormLabel, Switch, SwitchProps, Text } from "@chakra-ui/react";

type Props = SwitchProps & {
  text: string
  idForLabel: string 
}

const shadowColor = "#d69ef7"

const QRFormSwitch = ({text, idForLabel, ...props}: Props) => {
  return (
    <Flex marginLeft="auto">
      <FormLabel htmlFor={idForLabel}>
        <Text
          as="span"
          textShadow={`0 0 5px ${shadowColor}, 0 0 5px ${shadowColor}`}
          fontWeight="bold"
        >
          {text}
        </Text>
      </FormLabel>
      <Switch id={idForLabel} size="lg" variant="purply" {...props} />
    </Flex>
  );
};

export default QRFormSwitch;
