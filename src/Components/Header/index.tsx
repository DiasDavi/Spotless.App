import React from "react";
import { Heading, VStack, Image } from "native-base";
import { View } from "react-native";

interface HeaderProps {
  text?: boolean;
}

const Header: React.FC<HeaderProps> = ({ text = false }) => {
  return (
    <VStack alignItems="center" space={15}>
      <Image
        source={require("../../Assets/HouseLogo.png")}
        alt="logo"
        resizeMode="contain"
      />
      <View>
        <Heading fontSize={36} color="#FFFFFF">
          SPOT
        </Heading>
        <Heading fontSize={36} color="#F7C425">
          LESS
        </Heading>
      </View>
      {text && (
        <Heading fontSize={24} color="#FFFFFF" fontWeight="light">
          Seu espaço impecável
        </Heading>
      )}
    </VStack>
  );
};

export default Header;
