import styled from "styled-components/native";
import { ArrowLeft, CaretLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex-direction: column;
  align-items: flex-start;
  height: 104px;
  top: 32px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
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
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.WHITE,
  weight: "bold"
}))``;
