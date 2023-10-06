import { Box, HStack, Heading, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

interface ServiceProviderCardProps {
  name: string;
  service: string;
  description: string;
  phone: string;
  adress: string;
  price: number;
  date?: string;
  isDate?: boolean;
  isCancelOrder?: boolean;
  onPress?: () => any;
}

const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({
  name,
  service,
  description,
  phone,
  adress,
  price,
  date,
  isDate = false,
  isCancelOrder = false,
  onPress,
}) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      my={2}
      p={6}
      bg="white"
      m={5}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.8}
      shadowRadius={2}
      elevation={5}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <HStack alignItems={"center"} space={2}>
          <FontAwesome name="user-circle" size={45} color="#081038" />
          <Heading>{name}</Heading>
          <Heading>-</Heading>
          <Heading color={"#F02A2A"}>{service}</Heading>
        </HStack>
        {isDate && <Heading>{date}</Heading>}
      </HStack>
      <Box my={3}>
        <Heading>Serviço: {description}</Heading>
        <HStack space={15}>
          <Box>
            <Heading>Telefone: {phone}</Heading>
            <Heading>Endereço: {adress}</Heading>
            <Heading>
              Preço da visita: <Heading color={"#4BA105"}>R${price},00</Heading>
            </Heading>
          </Box>
        </HStack>
        <Pressable
          px={3}
          py={15}
          maxH={60}
          maxW={130}
          rounded={"md"}
          bg={isCancelOrder ? "#F02A2A" : "#2A356E"}
          my={6}
          onPress={onPress}
        >
          <Heading color={"white"}>
            {isCancelOrder ? "Cancelar" : "Contratar"}
          </Heading>
        </Pressable>
      </Box>
    </Box>
  );
};
export default ServiceProviderCard;
