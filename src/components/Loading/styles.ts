import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const LogoComprass = styled.Image`
  width: 263px;
  height: 56px;
  top: 100px;
`;

export const ImageLogoBG = styled.ImageBackground`
  width: 375px;
  height: 375px;
  align-items: center;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.RED_500,
  size: 80
}))`
  margin-top: 112px;
`;
