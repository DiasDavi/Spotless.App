import { Box, Heading, Toast } from "native-base";
import { ServiceRegisters, usersRegisters } from "../Mock/userRegisters";
import { UserLogin } from "../Types";

export const handleChange =
  <T extends keyof any>(
    field: T,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) =>
  (value: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

export const handleLogin = (userLogin: UserLogin) => {
  let isValidUser = false;

  usersRegisters.forEach((register) => {
    if (userLogin.name === register.name && userLogin.pass === register.pass) {
      isValidUser = true;
      return; // Interrompe o loop, pois um registro válido foi encontrado
    }
  });

  if (isValidUser) {
    Toast.show({
      render: () => (
        <Box
          px={10}
          py={"1%"}
          rounded={"md"}
          bg={"#50C878"}
          justifyContent={"center"}
        >
          <Heading color={"#FFFFFF"}>Bem Vindo {userLogin.name}</Heading>
        </Box>
      ),
    });
  } else {
    Toast.show({
      render: () => (
        <Box
          px={10}
          py={"1%"}
          rounded={"md"}
          bg={"#FF5733"}
          justifyContent={"center"}
        >
          <Heading color={"#FFFFFF"}>Usuário/Senha inválido</Heading>
        </Box>
      ),
    });
  }
  return isValidUser;
};

export const HandlePostClient = () => {
  Toast.show({
    placement: "top",
    render: () => {
      return (
        <Box
          px={10}
          py={"1%"}
          rounded={"md"}
          bg={"#50C878"}
          justifyContent={"center"}
        >
          <Heading color={"#FFFFFF"}>Cadastro realizado</Heading>
        </Box>
      );
    },
  });
};

export const handleConfirmPass = (
  user: any,
  setIsPasswordMatch: React.Dispatch<React.SetStateAction<any>>,
  value: string
) => {
  value === user.password
    ? setIsPasswordMatch(true)
    : setIsPasswordMatch(false);
};

export const filterServices = (filter = "*") => {
  if (filter === "*") {
    return ServiceRegisters;
  } else {
    return ServiceRegisters.filter((item) => item.serviceType === filter);
  }
};
