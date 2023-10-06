import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import SearchBar from "../../Components/SeachComponent/SearchBar";
import ServiceCard from "../../Components/ServiceCard";
import { setFilter } from "../../Store";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const handleFilter = (filterValue: string) => {
    dispatch(setFilter(filterValue));
  };
  return (
    <SafeAreaView>
      <Center>
        <Box w={"90%"} my={75}>
          <VStack space={50}>
            <SearchBar
              placeholder={"Pesquise um serviço"}
              value={search}
              handleSearch={(value: string) => setSearch(value)}
              onSubmitEditing={() => {
                handleFilter(search);
                navigation.navigate("Discovery");
                setSearch("")
              }}
            />
            <VStack space={30}>
              <HStack justifyContent={"space-between"}>
                <ServiceCard
                  onPress={() => {
                    handleFilter("Limpeza de ambientes");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#081038"}
                  label={"Limpeza de ambientes"}
                />
                <ServiceCard
                  onPress={() => {
                    handleFilter("Jardinagem");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#A806D6"}
                  label={"Jardinagem"}
                />
              </HStack>
              <HStack justifyContent={"space-between"}>
                <ServiceCard
                  onPress={() => {
                    handleFilter("Dedetização");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#ED2913"}
                  label={"Dedetização"}
                />
                <ServiceCard
                  onPress={() => {
                    handleFilter("Limpeza de Piscinas");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#D68306"}
                  label={"Limpeza \nde Piscinas"}
                />
              </HStack>
              <HStack justifyContent={"space-between"}>
                <ServiceCard
                  onPress={() => {
                    handleFilter("Montagem de moveis");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#1337ED"}
                  label={"Montagem \nde moveis"}
                />
                <ServiceCard
                  onPress={() => {
                    handleFilter("Serviços gerais");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#2A356E"}
                  label={"Serviços \ngerais"}
                />
              </HStack>
              <HStack justifyContent={"space-between"}>
                <ServiceCard
                  onPress={() => {
                    handleFilter("Pintura");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#4BA105"}
                  label={"Pintura"}
                />
                <ServiceCard
                  onPress={() => {
                    handleFilter("Frete");
                    navigation.navigate("Discovery");
                  }}
                  bg={"#ED5B2B"}
                  label={"Frete"}
                />
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
export default Home;
