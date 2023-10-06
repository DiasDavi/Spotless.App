import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  useNavigation,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { Center, HStack, IconButton } from "native-base";
import React, { useEffect, useState } from "react";

interface TabBarProps {
  currentRoute: string;
}

const TabBar: React.FC<TabBarProps> = ({ currentRoute }) => {
  const navigation = useNavigation();
  return (
    <Center>
      <HStack justifyContent="space-between" w="80%">
        <IconButton
          onPress={() => {
            navigation.navigate("Home");
          }}
          icon={
            currentRoute === "Home" ? (
              <FontAwesome name="home" size={45} color="#081038" />
            ) : (
              <FontAwesome name="home" size={45} color="black" />
            )
          }
        />
        <IconButton
          onPress={() => {
            navigation.navigate("Discovery");
          }}
          icon={
            currentRoute === "Discovery" ? (
              <Ionicons name="compass" size={45} color="#081038" />
            ) : (
              <FontAwesome5 name="compass" size={45} color="black" />
            )
          }
        />
        <IconButton
          onPress={() => {
            navigation.navigate("Order");
          }}
          icon={
            currentRoute === "Order" ? (
              <Ionicons name="file-tray-full" size={45} color="#081038" />
            ) : (
              <Ionicons name="file-tray" size={45} color="black" />
            )
          }
        />
        <IconButton
          onPress={() => {
            navigation.navigate("UserConfigs");
          }}
          icon={
            currentRoute === "UserConfigs" ? (
              <FontAwesome name="user-circle" size={45} color="#081038" />
            ) : (
              <FontAwesome name="user-circle-o" size={45} color="black" />
            )
          }
        />
      </HStack>
    </Center>
  );
};

export default TabBar;
