import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { HeaderContainer, BackButton, Title , TitleContainer} from "./styles"; 

interface CepHeaderProps {
  text: string;
  onBackPress: () => void;
}

export const CheckoutHeader: React.FC<CepHeaderProps> = ({ text, onBackPress }) => {
  return (
    <HeaderContainer>
      <BackButton onPress={onBackPress}>
        <AntDesign name="left" style={{ fontSize: 25 }} />
      </BackButton>
     <TitleContainer>
      <Title>{text}</Title>
      </TitleContainer>
    </HeaderContainer>
  );
};