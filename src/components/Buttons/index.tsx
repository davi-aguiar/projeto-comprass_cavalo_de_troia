import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  width?: number;
  height?: number;
  isDisabled?: boolean; // Nova propriedade para habilitar ou desabilitar o botão
};

export function ButtonComponent({
  title,
  width,
  height,
  isLoading = false,
  isDisabled = false, // Defina o valor padrão como falso
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  return (
    <Container
      style={{
        height: height,
        width: width,
        backgroundColor: isDisabled ? COLORS.GRAY_900 : COLORS.RED_500,
      }}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={COLORS.BLACK_800} />
      ) : (
        <Title style={{ color: isDisabled ? COLORS.WHITE : COLORS.WHITE }}>
          {title}
        </Title>
      )}
    </Container>
  );
}
