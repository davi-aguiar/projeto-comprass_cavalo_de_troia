import React from "react";
import { render } from "@testing-library/react-native";
import { Loading } from "../components/Loading";
import { Container } from "@components/Buttons/styles";
import {
  ImageLogoBG,
  LogoComprass,
  LoadIndicator
} from "@components/Loading/styles";
import styled from "styled-components";

const mockTheme = {
  COLORS: {
    BLACK_800: "#000000"
  },
  View: styled.View
};

jest.mock("styled-components/native", () => {
  return {
    useTheme: () => mockTheme
  };
});
describe("Loading", () => {
  it("should render the loading component with the background image, logo, and spinner", () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId("container")).toBeTruthy();
    expect(getByTestId("image-logo-bg")).toBeTruthy();
    expect(getByTestId("logo-comprass")).toBeTruthy();
    expect(getByTestId("load-indicator")).toBeTruthy();
  });
});
