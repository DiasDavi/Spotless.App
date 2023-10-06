import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  FormControl,
  HStack, Input,
  Select, VStack,
  WarningOutlineIcon
} from "native-base";
import React, { useState } from "react";
import LocationForm from "../../Components/AddressForm";
import BackButton from "../../Components/BackButton";
import ButtonCustom from "../../Components/Button";
import Header from "../../Components/Header";
import { ServiceProvider } from "../../Types";
import InputCustom from "../../Components/Input/Index";
import { HandlePostClient, handleChange, handleConfirmPass } from "../../Utils/Index";

const ServerSign: React.FC = () => {
  const [mode, setMode] = useState(false);
  const [serviceProvider, setServiceProvider] = useState<ServiceProvider>({});
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const navigation = useNavigation();


  return (
    <Box flex={1} bg="#0D27AB" py={20}>
      {!mode ? (
        <>
          <BackButton onPress={() => navigation.navigate("Sign")} />
          <Center mt={15}>
            <Header />
            <Box bg="#081038" p={30} mt={30} rounded={"md"}>
              <VStack space={30} alignItems={"center"}>
                <FormControl w={"70%"}>
                  <FormControl.Label>Tipo de Serviço</FormControl.Label>
                  <Select
                    w={"100%"}
                    bg={"#FFFFFF"}
                    isFocused={false}
                    placeholder="Eletricista..."
                    fontSize={20}
                    onValueChange={handleChange("serviceType", setServiceProvider)}
                  >
                    <Select.Item label="Eletricista" value="Eletricista" />
                    <Select.Item label="Jardineiro(a)" value="Jardinagem" />
                    <Select.Item label="Dedetização" value="Dedetização" />
                    <Select.Item label="Pintura" value="Pintura" />
                    <Select.Item label="Frete" value="Frete" />
                    <Select.Item
                      label="limpeza de ambientes"
                      value="limpeza de ambientes"
                    />
                  </Select>
                </FormControl>
                <InputCustom
                  w={"70%"}
                  placeholder="Nome"
                  onChangeText={handleChange("name", setServiceProvider)}
                  inputLeftElement={
                    <Box p={3}>
                      <FontAwesome
                        name="user-circle"
                        size={30}
                        color="#081038"
                      />
                    </Box>
                  }
                />
                <InputCustom
                  w={"70%"}
                  placeholder="Email"
                  inputLeftElement={
                    <Box p={3}>
                      <MaterialIcons name="email" size={30} color="#081038" />
                    </Box>
                  }
                />
                <HStack space={"10%"}>
                  <InputCustom
                    w={"30%"}
                    placeholder="Senha"
                    onChangeText={handleChange("password", setServiceProvider)}
                    inputLeftElement={
                      <Box p={3}>
                        <FontAwesome name="lock" size={30} color="#081038" />
                      </Box>
                    }
                  />
                  <FormControl isInvalid={isPasswordMatch === false} w={"30%"}>
                    <Input
                      placeholder="Confirmar senha"
                      bg={"#FFFFFF"}
                      _focus={{ bg: "#FFFFFF" }}
                      rounded={"md"}
                      fontSize={20}
                      secureTextEntry
                      onChangeText={(value)=> handleConfirmPass(serviceProvider, setIsPasswordMatch, value)}
                      InputLeftElement={
                        <Box p={3}>
                          <FontAwesome name="lock" size={30} color="#081038" />
                        </Box>
                      }
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<WarningOutlineIcon size="xs" />}
                    >
                      As senhas não batem
                    </FormControl.ErrorMessage>
                  </FormControl>
                </HStack>
                <InputCustom
                    w={"70%"}
                    placeholder="Preço em Reais"
                    onChangeText={handleChange("price", setServiceProvider)}
                    inputLeftElement={
                      <Box p={3}>
                        <FontAwesome5
                          name="money-check"
                          size={30}
                          color="#081038"
                        />
                      </Box>
                    }
                  />
                <ButtonCustom
                  label={"Prosseguir"}
                  onPress={() => isPasswordMatch && setMode(true)}
                />
              </VStack>
            </Box>
          </Center>
        </>
      ) : (
        <LocationForm
          setMode={setMode}
          serviceProvider={serviceProvider}
          onPress={()=>{HandlePostClient(); navigation.navigate("Login")}}
        />
      )}
    </Box>
  );
};

export default ServerSign;
