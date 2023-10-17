import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
  align-items: center;
`;

export const ImageLogoBG = styled.ImageBackground`
  width: 375px;
  height: 375px;
  top: 218px;
  flex-shrink: 0;
`;

export const ContentInputs = styled.View`
  bottom: 200px;
  margin-left: 16px;
`;

export const ContainerEmailInput = styled.View`
  margin-bottom: 16px;
`;

export const ContainerPasswordInput = styled.View`
  margin-bottom: 16px;
`;

export const ButtonContent = styled.View`
  height: 100px;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 17px;
  bottom: 80px;
`;
export const ButtonContainer = styled.View`
  margin-bottom: 16px;
`;
export const HeaderContent = styled.View`
  height: 104px;
  margin-bottom: 62px;
  bottom: 200px;
`;

export const TextContent = styled.Text`
  height: 72px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  margin-right: 19px;
  margin-bottom: 16px;
  bottom: 202px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLACK_800};
  text-align: center;
  padding-top: 18px;
  padding-left: 14px;
  padding-bottom: 2px;
`;
