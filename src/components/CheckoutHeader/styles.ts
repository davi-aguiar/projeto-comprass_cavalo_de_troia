import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

export const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  
  width: 375px;
  height: 100px;
  margin-top: 50px;
`;

export const BackButton = styled(TouchableOpacity)`
 
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.COLORS.BLACK_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
  font-weight: bold;
 
`;
export const TitleContainer = styled(View)`
  flex:1;
  justify-content: center;
  align-items: center;
`;