import React from "react";
import { Pressable, Text } from "native-base";

interface ButtonCustomProps {
  px?: number;
  py?: number;
  bg?: string;
  rounded?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  label: string;
  onPress: () => void;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({
  px = 10,
  py = 5,
  bg = "#FFFFFF",
  rounded = "md",
  color = "#364178",
  fontSize = 20,
  fontWeight = "bold",
  label,
  onPress,
}) => {
  return (
    <Pressable
      px={px}
      py={py}
      bg={bg}
      rounded={rounded}
      alignItems={"center"}
      onPress={onPress}
    >
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {label}
      </Text>
    </Pressable>
  );
};

export default ButtonCustom;
