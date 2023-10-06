import { Box, Center, HStack, Heading, Pressable, VStack } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar",
    "Abril",
    "Mai",
    "Jun",
    "Jul.",
    "Ago",
    "Set.",
    "Oct.",
    "Nov.",
    "Dez.",
  ],
  dayNames: [
    "Domingo",
    "Sabado",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
  ],
  dayNamesShort: ["D", "S", "S", "T", "Q", "Q", "S"],
};
LocaleConfig.defaultLocale = "pt-br";

const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];

interface ScheduleProps {
  setMode: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  serviceType: string;
  selectedDate: string;
  price: number;
  onDayPress: () => any;
  onOrder: () => any;
}

const Schedule: React.FC<ScheduleProps> = ({
  setMode,
  name,
  serviceType,
  selectedDate,
  price,
  onDayPress,
  onOrder,
}) => {
  return (
    <Center>
      <Box w={"90%"}>
        <VStack space={30}>
          <HStack alignItems={"center"}>
            <Pressable onPress={setMode}>
              <Ionicons name="md-chevron-back" size={36} color="black" />
            </Pressable>
            <FontAwesome name="user-circle" size={45} color="#081038" />
            <Box ml={5}>
              <Heading>{name}</Heading>
              <Heading fontWeight={"light"} color={"#F02A2A"}>
                {serviceType}
              </Heading>
            </Box>
          </HStack>
          <Heading fontWeight={"light"}>Agende o dia da visita</Heading>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [selectedDate]: { selected: true, marked: true },
              [formattedDate]: { selected: true },
            }}
            theme={{
              selectedDayBackgroundColor: "#081038",
              todayTextColor: "black",
              arrowColor: "black",
              textDayHeaderFontSize: 16,
            }}
          />
          <Heading fontWeight={"light"}>
            Preço da visita: <Heading color={"#4BA105"}>R${price},00</Heading>
          </Heading>
          {/* TODO - finish the contract */}
          <Pressable
            px={3}
            py={15}
            maxW={130}
            rounded={"md"}
            bg={"#2A356E"}
            my={6}
            onPress={onOrder}
          >
            <Heading color={"white"}>Contratar</Heading>
          </Pressable>
        </VStack>
      </Box>
    </Center>
  );
};
export default Schedule;
