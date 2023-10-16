import React, { useState } from "react";
import { ActivityIndicator, TextInputProps } from "react-native";
import { Hoshi, HoshiProps } from "react-native-textinput-effects";
import { Container, HoshiInput, Icon } from "./styles";
import { useTheme } from "styled-components";
import { Eye } from "phosphor-react-native";

type Props = HoshiProps &
  TextInputProps & {
    label: string;
    errorMessage?: string | null;
    showIcon?: boolean;
    formValidation?: boolean;
  };

export function Input({
  label,
  showIcon,
  errorMessage,
  onChangeText,
  value,
  formValidation,
  ...rest
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const hasError = !!errorMessage;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <Container>
      <HoshiInput
        label={label}
        {...rest}
        secureTextEntry={!isPasswordVisible}
        onChangeText={onChangeText}
        value={value}
        style={{
          borderColor: hasError ? "red" : "black"
        }}
        rightIcon={
          showIcon && (
            <Icon
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              onPress={togglePasswordVisibility}
            />
          )
        }
      />
      {formValidation && !errorMessage && <ActivityIndicator />}
    </Container>
  );
}
