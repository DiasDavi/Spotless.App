import { Box, Center, FlatList, Heading, Toast, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import ServiceProviderCard from "../../Components/ServiceProviderCard";
import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "../../Store";

const Order: React.FC = () => {
  const mounths = [
    "Jan",
    "Feb",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const schedule = useSelector((state: RootState) => state.order.order);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Center>
        <Box w={"90%"}>
          <VStack space={30}>
            <Box>
              <Heading>Pedidos</Heading>
              <Heading fontWeight={"light"}>
                Aqui você pode ver seus pedidos de serviços
              </Heading>
            </Box>
            <FlatList
              data={schedule}
              maxH={Dimensions.get("window").height - 200}
              renderItem={({ item }) => (
                <ServiceProviderCard
                  name={item.name}
                  service={item.serviceType}
                  phone={item.phone}
                  description={item.description}
                  adress={item.adress}
                  price={item.price}
                  isDate
                  isCancelOrder
                  date={`${item.date.slice(8, 10)} de ${
                    mounths[item.date.slice(6, 7)]
                  }`}
                  onPress={() => {
                    dispatch(removeOrder(item.name, item.phone, item.address));
                    Toast.show({
                      placement: "bottom",
                      render: () => {
                        return (
                          <Box
                            px={10}
                            py={"1%"}
                            rounded={"md"}
                            bg={"#50C878"}
                            justifyContent={"center"}
                          >
                            <Heading color={"#FFFFFF"}>
                              Pedido Cancelado
                            </Heading>
                          </Box>
                        );
                      },
                    });
                  }}
                />
              )}
            />
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};
export default Order;
