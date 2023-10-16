import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const ImageLogoBG = styled.ImageBackground`
  width: 375px;
  height: 375px;
  top: 218px;
  flex-shrink: 0;
`;

export const ContentInputs = styled.View`
  margin-left: 26px;
`;

export const ContainerEmailInput = styled.View`
  margin-bottom: 16px;
`;

export const ButtonContent = styled.View`
  top: 60px;
  height: 100px;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 17px;
`;

export const ContainerText = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const SignUpContainer = styled.TouchableOpacity``;

export const DontLogContainer = styled.TouchableOpacity``;
export const ForgotContainer = styled.TouchableOpacity``;

export const SignUpText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  margin-top: 24px;
`;

export const DontLoginText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  margin-top: 24px;
`;

export const LogoComprass = styled.Image`
  width: 263px;
  height: 56px;
  bottom: 64px;
  margin-left: auto;
  margin-right: auto;
`;

export const DontLog = styled.TouchableOpacity``;
