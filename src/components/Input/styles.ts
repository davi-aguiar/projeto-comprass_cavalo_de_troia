import styled from "styled-components/native";
import { Hoshi } from "react-native-textinput-effects";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HoshiInput = styled(Hoshi).attrs(({ theme }) => ({
  borderHeight: 0,
  inputPadding: 16,
  maxWidth: "80%",
  inputStyle: {
    color: theme.colors.black[800],
    fontSize: theme.fontSizes.MD,
    fontFamily: theme.fontFamily.REGULAR,
    bottom: 2
  }
}))`
  flex: 1;

  min-height: 64px;
  max-height: 64px;

  border-width: 1px;

  border-color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.white};

  text-align: left;
  justify-content: flex-start;

  max-width: 343px;

  border-radius: 6px;

  elevation: 1;
`;
