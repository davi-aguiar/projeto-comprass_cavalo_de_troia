import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { HoshiProps } from "react-native-textinput-effects";
import { Container, HoshiInput } from "./styles";

import { useTheme } from "styled-components";

type Props = HoshiProps &
  TextInputProps & {
    label: string;
    errorMessage?: string | null;
    icon?: boolean;
    formValidation?: boolean;
  };

export function Input({
  label,
  icon,
  errorMessage,
  value,
  formValidation,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const showErrorIcon = !!errorMessage;
  const hasValue = value && value.trim() !== "";

  // const { COLORS, FONTE_SIZE, FONT_FAMILY } = useTheme();

  // const labelStyle = {
  //   fontSize: isFocused || hasValue ? FONTE_SIZE.XS :
  //   FONT_FAMILY: FONT_FAMILY.REGULAR,
  //   top: isFocused || hasValue ? 10 : -2
  // };

  // const labelStyleError = {
  //   color: errorMessage ? COLORS.red[500] : COLORS.gray[500],
  //   ...labelStyle
  // };

  return (
    <Container>
      <HoshiInput label={label} {...rest} />
    </Container>
  );
}
