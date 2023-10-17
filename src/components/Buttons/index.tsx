import React, { useState } from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  isDisabled?: boolean;
};

export function ButtonComponent({
  title,
  width,
  height,
  isLoading = false,
  isDisabled,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <>
      {isLoading ? (
        <Container
          accessibilityHint="button"
          style={{
            opacity: 0.5,
            height: height,
            width: width,
            backgroundColor: isDisabled ? COLORS.GRAY_900 : COLORS.RED_500
          }}
          disabled
          {...rest}
        >
          <ActivityIndicator size="small" color={COLORS.BLACK_800} />
        </Container>
      ) : (
        <Container
          style={{ height: height, width: width }}
          disabled={isDisabled}
          {...rest}
        >
          <Title>{title}</Title>
        </Container>
      )}
    </>
  );
}
