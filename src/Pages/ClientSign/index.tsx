import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  FormControl,
  Input,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LocationForm from "../../Components/AddressForm";
import BackButton from "../../Components/BackButton";
import ButtonCustom from "../../Components/Button";
import Header from "../../Components/Header";
import InputCustom from "../../Components/Input/Index";
import { addUser } from "../../Store";
import { User } from "../../Types";
import {
  handleChange,
  handleConfirmPass
} from "../../Utils/Index";

const ClientSign: React.FC = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(false);
  const [user, setUser] = useState<User>({});
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
                <InputCustom
                  w={"100%"}
                  value={user.name}
                  placeholder="Nome"
                  onChangeText={handleChange("name", setUser)}
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
                  w={"100%"}
                  value={user.email}
                  placeholder="Email"
                  onChangeText={handleChange("email", setUser)}
                  inputLeftElement={
                    <Box p={3}>
                      <MaterialIcons name="email" size={30} color="#081038" />
                    </Box>
                  }
                />
                <InputCustom
                  w={"100%"}
                  value={user.password}
                  placeholder="Senha"
                  secureTextEntry={true}
                  onChangeText={handleChange("password", setUser)}
                  inputLeftElement={
                    <Box p={3}>
                      <FontAwesome name="lock" size={30} color="#081038" />
                    </Box>
                  }
                />
                <FormControl isInvalid={isPasswordMatch === false} maxW="300px">
                  <Input
                    w={300}
                    placeholder="Confirmar senha"
                    bg={"#FFFFFF"}
                    _focus={{ bg: "#FFFFFF" }}
                    rounded={"md"}
                    fontSize={20}
                    onChangeText={(value) =>
                      handleConfirmPass(user, setIsPasswordMatch, value)
                    }
                    secureTextEntry
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
                <ButtonCustom
                  label={"Prosseguir"}
                  onPress={() => {
                    isPasswordMatch && setMode(true);
                  }}
                />
              </VStack>
            </Box>
          </Center>
        </>
      ) : (
        <LocationForm
          setMode={setMode}
          user={user}
          setUser={setUser}
          onPress={() => {
            dispatch(addUser(user));
            navigation.navigate("Login");
          }}
        />
      )}
    </Box>
  );
};

export default ClientSign;
