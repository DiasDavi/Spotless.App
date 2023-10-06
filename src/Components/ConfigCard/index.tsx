import { HStack, Heading, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons";

interface ConfigCardProps {
  title: string;
  subtitle: string;
  icon: any;
}

const ConfigCard: React.FC<ConfigCardProps> = ({ title, subtitle, icon }) => {
  return (
    <HStack alignItems={"center"} justifyContent={"space-between"}>
      <HStack alignItems={"center"} space={5}>
        {icon}
        <VStack>
          <Heading>{title}</Heading>
          <Heading fontWeight={"light"}>{subtitle}</Heading>
        </VStack>
      </HStack>
      <Entypo name="chevron-right" size={50} color="black" />
    </HStack>
  );
};
export default ConfigCard;
