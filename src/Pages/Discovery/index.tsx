import { Box, Center, FlatList, HStack, Heading, VStack } from "native-base";
import { useState } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Schedule from "../../Components/Schedule";
import ServiceProviderCard from "../../Components/ServiceProviderCard";
import { useSelector, useDispatch } from "react-redux";
import { filterServices } from "../../Utils/Index";
import { addOrder, setFilter } from "../../Store";
import { useNavigation } from "@react-navigation/native";

const Discovery: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const navigation = useNavigation();
  const filter = useSelector((state: RootState) => state.filter.value);
  const filteredServices = filterServices(filter);
  const [mode, setMode] = useState(false);
  const [service, setService] = useState<any>();
  const [selectedDate, setSelectedDate] = useState(formattedDate);
  const dispatch = useDispatch();
  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };
  const handleFilter = (filterValue: string) => {
    dispatch(setFilter(filterValue));
  };
  return (
    <SafeAreaView>
      {!mode ? (
        <Center>
          <Box w={"90%"}>
            <VStack space={30}>
              <HStack justifyContent={"space-between"}>
                <Box>
                  <Heading>Descobrir</Heading>
                  <Heading fontWeight={"light"}>
                    Encontre novidades aqui{" "}
                  </Heading>
                </Box>
                <Heading onPress={() => handleFilter("*")}>Limpar</Heading>
              </HStack>
              <FlatList
                data={filteredServices}
                maxH={Dimensions.get("window").height - 200}
                renderItem={({ item }) => (
                  <ServiceProviderCard
                    name={item.name}
                    service={item.serviceType}
                    phone={item.phone}
                    description={item.description}
                    adress={item.address}
                    price={item.price}
                    onPress={() => {
                      setService(item);
                      setMode(!mode);
                    }}
                  />
                )}
              />
            </VStack>
          </Box>
        </Center>
      ) : (
        <Schedule
          setMode={() => setMode(!mode)}
          name={service.name}
          serviceType={service.serviceType}
          selectedDate={selectedDate}
          onDayPress={onDayPress}
          price={service.price}
          onOrder={() => {
            const newScheduleItem = {
              name: service.name,
              serviceType: service.serviceType,
              phone: service.phone,
              description: service.description,
              address: service.address,
              price: service.price,
              date: selectedDate,
            };
            dispatch(addOrder(newScheduleItem));
            navigation.navigate("Order");
            setMode(!mode)
          }}
        />
      )}
    </SafeAreaView>
  );
};
export default Discovery;
