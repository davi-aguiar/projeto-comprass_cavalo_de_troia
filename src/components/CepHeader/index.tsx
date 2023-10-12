import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { HeaderContainer, BackButton, Title } from "./styles"; // Importe as constantes de style.ts

interface CepHeaderProps {
  text: string;
  onBackPress: () => void;
}

export const CepHeader: React.FC<CepHeaderProps> = ({ text, onBackPress }) => {
  return (
    <HeaderContainer>
      <BackButton onPress={onBackPress}>
        <AntDesign name="left" style={{ fontSize: 25 }} />
      </BackButton>
      <Title>{text}</Title>
    </HeaderContainer>
  );
};
