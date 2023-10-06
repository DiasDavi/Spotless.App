import { useNavigation } from "@react-navigation/native";
import {
  Center,
  HStack,
  Heading,
  Input,
  VStack
} from "native-base";
import React, { useState } from "react";
import BackButton from "../../Components/BackButton";
import ButtonCustom from "../../Components/Button";
import Header from "../../Components/Header";
import { Adress, ServiceProvider, User } from "../../Types";

interface LocationFormProps {
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  user?: User;
  serviceProvider?: ServiceProvider;
  setUser?: React.Dispatch<React.SetStateAction<User>>;
  onPress?: ()=> void;
}

const LocationForm: React.FC<LocationFormProps> = ({
  setMode,
  user,
  serviceProvider,
  setUser,
  onPress
}) => {
  const navigation = useNavigation();
  const [adress, setAdress] = useState<Adress>({});
  const handleAdressinputChange = (field: keyof Adress) => (value: string) => {
    setAdress((prevAdress) => ({
      ...prevAdress,
      [field]: value,
    }));
    setUser((prevState) => ({ ...prevState, adress: adress }));
  };
  return (
    <>
      <BackButton onPress={() => setMode((prevMode) => !prevMode)} />
      <Center mt={15}>
        <VStack space={30} w={"90%"}>
          <Header />
          <Heading color={"#FFFFFF"}>Olá { user ? user.name : serviceProvider. name}</Heading>
          <Heading color={"#FFFFFF"}>
            Para finalizar o seu cadastro, precisamos do seu endereço. Por
            favor, forneça-nos essas informações.
          </Heading>
          <VStack space={30} alignItems={"center"}>
            <Input
              w={"100%"}
              placeholder="Estado"
              bg={"#FFFFFF"}
              _focus={{ bg: "#FFFFFF" }}
              rounded={"md"}
              fontSize={20}
              onChangeText={handleAdressinputChange("state")}
            />
            <Input
              w={"100%"}
              placeholder="Cidade"
              bg={"#FFFFFF"}
              _focus={{ bg: "#FFFFFF" }}
              rounded={"md"}
              fontSize={20}
              onChangeText={handleAdressinputChange("city")}
            />
            <HStack space={"10%"}>
              <Input
                w={"65%"}
                placeholder="Rua"
                bg={"#FFFFFF"}
                _focus={{ bg: "#FFFFFF" }}
                rounded={"md"}
                fontSize={20}
                onChangeText={handleAdressinputChange("street")}
              />
              <Input
                w={"25%"}
                placeholder="Núm"
                bg={"#FFFFFF"}
                _focus={{ bg: "#FFFFFF" }}
                rounded={"md"}
                fontSize={20}
                onChangeText={handleAdressinputChange("houseNumber")}
              />
            </HStack>
            <Input
              w={"100%"}
              placeholder="Complemento"
              bg={"#FFFFFF"}
              _focus={{ bg: "#FFFFFF" }}
              rounded={"md"}
              fontSize={20}
              onChangeText={handleAdressinputChange("additionalObservation")}
            />
            <ButtonCustom
              label={"Cadastrar"}
              onPress={onPress}
            />
          </VStack>
        </VStack>
      </Center>
    </>
  );
};

export default LocationForm;
