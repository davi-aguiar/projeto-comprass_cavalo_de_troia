import styled from "styled-components/native";
import { Hoshi } from "react-native-textinput-effects";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HoshiInput = styled(Hoshi).attrs(({ theme }) => ({
  borderHeight: 0,
  inputPadding: 16,
  maxWidth: "80%",
  inputStyle: {
    color: theme.COLORS.BLACK_800,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BLACK,
    bottom: 2
  }
}))`
  flex: 1;
  min-height: 64px;
  max-height: 64px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: left;
  justify-content: flex-start;
  max-width: 343px;
  border-radius: 6px;
  elevation: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.LG,
  color: theme.COLORS.WHITE,
  weight: "bold"
}))``;
