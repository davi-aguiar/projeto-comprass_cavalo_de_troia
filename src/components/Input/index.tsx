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

  const { colors, fontSizes, fontFamily } = useTheme();

  const labelStyle = {
    fontSize: isFocused || hasValue ? fontSizes.XS : fontSizes.SM,
    fontFamily: fontFamily.REGULAR,
    top: isFocused || hasValue ? 10 : -2
  };

  const labelStyleError = {
    color: errorMessage ? colors.red[500] : colors.gray[500],
    ...labelStyle
  };

  return (
    <Container>
      <HoshiInput label={label} {...rest} />
    </Container>
  );
}
