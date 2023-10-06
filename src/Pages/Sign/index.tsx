import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Box, Center, VStack, Heading } from "native-base";
import Header from "../../Components/Header";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../Components/BackButton";
import ButtonCustom from "../../Components/Button";

const Sign: React.FC = () => {
    const navigation = useNavigation();

    return (
        <Box flex={1} bg='#0D27AB' py={20}>
            <BackButton onPress={() => navigation.navigate('Login')} />
            <Center mt={15}>
                <Header />
                <Box bg='#081038' p={30} mt={30} rounded={'md'}>
                    <VStack space={30} alignItems={'center'}>
                        <FontAwesome name="user-circle" size={90} color="white" />
                        <Heading color={'#FFFFFF'}>Como você gostaria de se cadastrar?</Heading>
                        <ButtonCustom label={'Sou um cliente'} px={20} onPress={() => navigation.navigate('ClientSign')} />
                        <ButtonCustom label={'Sou um Prestador de serviços'} px={4} onPress={() => navigation.navigate('ServerSign')} />
                    </VStack>
                </Box>
            </Center>
        </Box>
    );
};

export default Sign;