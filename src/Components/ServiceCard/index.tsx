import { Box, Heading, Pressable } from "native-base";

interface ServiceCardProps {
  bg: string;
  label: string;
  onPress: () => any;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ bg, label, onPress }) => {
  return (
    <Pressable
      py={25}
      px={5}
      bg={bg}
      rounded={"3xl"}
      w={"48%"}
      justifyContent={"center"}
      onPress={onPress}
    >
      <Heading color={"#ffffff"} textAlign={"center"}>
        {label}
      </Heading>
    </Pressable>
  );
};

export default ServiceCard;
