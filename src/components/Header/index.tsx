import React from "react";
import { BackButton, BackIcon, Container, Spacer, Title } from "./styled";
import Feather from "react-native-vector-icons/Feather";

type Props = {
  title: string;
  showBackButton?: boolean;
  onPress?: () => void;
};

export function Header({ title, showBackButton = false, onPress }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={onPress}>
          <Feather name="chevron-left" size={75} color="#ce3333" />
        </BackButton>
      ) : (
        <Spacer />
      )}

      <Title>{title}</Title>
    </Container>
  );
}
