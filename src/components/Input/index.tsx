import React, { useState } from "react";
import { StyleProp, TextInputProps, TextStyle } from "react-native";
import { useTheme } from "styled-components/native";

import { HoshiProps } from "react-native-textinput-effects";

import {
  Container,
  SuccessIcon,
  ErrorIcon,
  HoshiInput,
  HidePassword
} from "./styles";

import EyeSVG from "@assets/icons/EyeOpen.svg";
import EyeOffSVG from "@assets/icons/eye-closed-svgrepo-com 1.svg";
import IconLoading from "@assets/icons/loading.svg";

type Props = TextInputProps &
  HoshiProps & {
    label: string;
    showIcon?: boolean;
    errorMessage?: string | null;
    formSubmitted?: boolean;
    isSearch?: boolean;
    isPasswordField?: boolean;
    isDisabled?: boolean;
    border?: boolean;
  };

export function Input({
  label,
  showIcon,
  onChangeText,
  value,
  errorMessage,
  formSubmitted,
  isSearch,
  isPasswordField,
  isDisabled,
  border,
  ...rest
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(true);

  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const hasValue = value && value.trim() !== "";

  return (
    <>
      <Container>
        <HoshiInput
          secureTextEntry={isPasswordField ? isPasswordVisible : false}
          label={label}
          style={{
            borderColor: errorMessage
              ? COLORS.RED_500
              : isDisabled
              ? COLORS.GRAY_100
              : formSubmitted &&
                !errorMessage &&
                hasValue &&
                showIcon &&
                !isSearch
              ? COLORS.GREEN
              : border
              ? COLORS.GRAY_100
              : undefined,
            backgroundColor: isDisabled ? COLORS.GRAY_100 : COLORS.WHITE,
            borderWidth: border ? 1 : 2,
            borderBottomWidth: border ? 1 : 2
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          value={value}
          editable={!isDisabled}
          {...rest}
        />
        {isSearch && showIcon ? (
          <IconLoading accessibilityHint="loading-icon" />
        ) : (
          (formSubmitted && !errorMessage && hasValue && showIcon && (
            <SuccessIcon />
          )) ||
          (errorMessage && showIcon && <ErrorIcon />)
        )}

        {isPasswordField && !isDisabled && (
          <HidePassword onPress={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeOffSVG width={25} accessibilityHint="eye-closed-icon" />
            ) : (
              <EyeSVG width={25} />
            )}
          </HidePassword>
        )}
      </Container>
    </>
  );
}
