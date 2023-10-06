import { Box, Center, HStack, Heading, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import ConfigCard from "../../Components/ConfigCard";
import { useSelector } from "react-redux";

const Configs: React.FC = () => {
  const loggedInUser = useSelector((state: RootState) => state.user.loggedInUser);
  return (
    <SafeAreaView>
      <Center>
        <Box w={"90%"}>
          <VStack space={30}>
            <HStack alignItems={"center"} space={3}>
              <FontAwesome name="user-circle" size={50} color="#081038" />
              <Heading>{loggedInUser.name}</Heading>
            </HStack>
            <VStack space={60}>
              <ConfigCard
                title="Favoritos"
                subtitle="Meus profissionais favoritos"
                icon={<FontAwesome name="heart-o" size={50} color="black" />}
              />
              <ConfigCard
                title="Notificações"
                subtitle="Minha central de notificações"
                icon={<FontAwesome5 name="bell" size={50} color="black" />}
              />
              <ConfigCard
                title="Pagamento"
                subtitle="Meus saldos e cartões"
                icon={
                  <FontAwesome name="credit-card" size={50} color="black" />
                }
              />
              <ConfigCard
                title="Meus Dados"
                subtitle="Minhas informações da conta"
                icon={<FontAwesome name="gear" size={50} color="black" />}
              />
            </VStack>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
export default Configs;
