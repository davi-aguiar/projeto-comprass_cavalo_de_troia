import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black[800]};
`;

export const ContainerImage = styled.ImageBackground`
  height: 375px;
  width: 375px;
  align-items: center;
`;

export const ContentHeader = styled.View`
  height: 104px;
  margin-bottom: 62px;
`;

export const ContentInputs = styled.View`
  min-height: 280px;
  max-height: 340px;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
`;

export const ContentButtons = styled.View`
  height: 100px;
  justify-content: space-between;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ContentReturnLogin = styled.View`
  width: 190px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const TextContent = styled.Text`
  height: 40px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  margin-right: 30px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.MD}px;
  font-family: ${({ theme }) => theme.fontFamily.REGULAR};
  color: ${({ theme }) => theme.colors.white};
`;
