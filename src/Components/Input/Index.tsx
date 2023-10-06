import React from "react";
import { FormControl, Input } from "native-base";

interface InputCustomProps {
  bg: string;
  color: string;
  placeholder: string;
  w: number | string;
  value?: string;
  secureTextEntry: boolean;
  inputLeftElement: JSX.Element;
  onChangeText?: () => void;
}

const InputCustom: React.FC<InputCustomProps> = ({
  placeholder,
  w,
  value,
  secureTextEntry = false,
  inputLeftElement,
  onChangeText,
}) => {
  return (
    <FormControl maxW={w}>
      <Input
        value={value}
        w={'100%'}
        placeholder={placeholder}
        bg={"#FFFFFF"}
        _focus={{ bg: "#FFFFFF" }}
        secureTextEntry={secureTextEntry}
        rounded={"md"}
        fontSize={20}
        onChangeText={onChangeText}
        InputLeftElement={inputLeftElement}
      />
    </FormControl>
  );
};

export default InputCustom;
