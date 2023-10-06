import React from "react";
import { Box, HStack, Heading, Pressable } from "native-base";
import { Ionicons } from '@expo/vector-icons';

interface BackButtonProps {
    onPress: () => void;
    color?: string;
    fontSize?: number;
}

const BackButton: React.FC<BackButtonProps> = ({ onPress, color = '#FFFFFF', fontSize = 18 }) => {
    return (
        <Pressable ml={15} onPress={onPress}>
            <HStack alignItems={'center'}>
                <Ionicons name="md-chevron-back" size={24} color="white" />
                <Heading fontSize={fontSize} color={color}> Voltar</Heading>
            </HStack>
        </Pressable>
    );
};

export default BackButton;