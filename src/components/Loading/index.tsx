import React from "react";
import { Container, ImageLogoBG, LoadIndicator, LogoComprass } from "./styles";

export function Loading() {
  return (
    <Container>
      <ImageLogoBG source={require("../../assets/images/ImageBackground.png")}>
        <LogoComprass
          source={require("../../assets/images/ComprassLogo.png")}
        />
        <LoadIndicator />
      </ImageLogoBG>
    </Container>
  );
}
