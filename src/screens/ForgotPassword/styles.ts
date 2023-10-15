import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const ImageLogoBG = styled.ImageBackground`
  width: 375px;
  height: 375px;
  background-color: blue;
  flex-shrink: 0;
`;

export const ContentInputs = styled.View`
  margin-left: 26px;
`;

export const ContainerEmailInput = styled.View`
  margin-bottom: 16px;
`;

export const ContainerPasswordInput = styled.View`
  margin-bottom: 16px;
`;

export const ButtonContent = styled.View`
  top: 60px;
  height: 100px;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 17px;
`;
export const ButtonContainer = styled.View`
  margin-bottom: 16px;
`;
export const HeaderContent = styled.View`
  height: 104px;
  margin-bottom: 62px;
  background-color: red;
`;
