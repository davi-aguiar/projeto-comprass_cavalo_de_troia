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

  return (
    <Container>
      <HoshiInput label={label} {...rest} />
    </Container>
  );
}
