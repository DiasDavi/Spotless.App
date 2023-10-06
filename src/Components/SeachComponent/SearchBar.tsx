import { Icon, Input } from "native-base";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  placeholder: string;
  value: string;
  handleSearch: () => any;
  onSubmitEditing: () => any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  handleSearch,
  onSubmitEditing,
}) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChangeText={handleSearch}
      onSubmitEditing={onSubmitEditing}
      variant="filled"
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={0.8}
      shadowRadius={2}
      borderColor="coolGray.400"
      borderWidth="1"
      w="100%"
      fontSize={20}
      rounded={"3xl"}
      py="6"
      px="2"
      InputLeftElement={
        <Icon
          ml="2"
          size="10"
          color="#0D27AB"
          as={<Ionicons name="ios-search" />}
        />
      }
    />
  );
};

export default SearchBar;
