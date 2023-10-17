import React from "react";
import { Container, ImageLogoBG, LoadIndicator, LogoComprass } from "./styles";

export function Loading() {
  return (
    <Container>
      <ImageLogoBG
        accessibilityHint="image-bg"
        source={require("../../assets/images/ImageBackground.png")}
      >
        <LogoComprass
          accessibilityHint="logo-image"
          source={require("../../assets/images/ComprassLogo.png")}
        />
        <LoadIndicator accessibilityHint="spinner" />
      </ImageLogoBG>
    </Container>
  );
}
