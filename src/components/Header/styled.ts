import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: 104px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.XL}px;
  font-family: ${({ theme }) => theme.fontFamily.BOLD};
  color: ${({ theme }) => theme.colors.black[800]};
  text-align: center;
  padding-top: 18px;
  padding-left: 14px;
  padding-bottom: 2px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  padding-bottom: 10px;
  padding-left: 8px;
  width: 44px;
  height: 44px;
`;

export const Spacer = styled.View`
  height: 44px;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.fontSizes.LG,
  color: theme.colors.black[800],
  weight: "bold"
}))``;
