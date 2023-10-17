import React from "react";
import { TouchableOpacityProps } from "react-native";
import { render } from "@testing-library/react-native";
import { ButtonComponent } from "../components/Buttons";
import styled from "styled-components/native";

jest.mock("styled-components/native");
describe("ButtonComponent", () => {
  it("should render button with title and default props", () => {
    const mockTheme = {
      COLORS: {
        RED_500: "red",
        GRAY_900: "gray"
      }
    };
    const mockUseTheme = jest.fn().mockReturnValue(mockTheme);
    jest.mock("styled-components/native", () => ({
      useTheme: mockUseTheme
    }));

    const { getByText, getByTestId } = render(
      <ButtonComponent title="Test Button" />
    );

    const button = getByTestId("button");
    expect(button).toBeTruthy();

    const title = getByText("Test Button");
    expect(title).toBeTruthy();
  });

  it("should render button without text when title is empty", () => {
    const mockTheme = {
      COLORS: {
        RED_500: "red",
        GRAY_900: "gray"
      },
      TouchableOpacity: styled.TouchableOpacity
    };
    const mockUseTheme = jest.fn().mockReturnValue(mockTheme);
    jest.mock("styled-components/native", () => ({
      useTheme: mockUseTheme
    }));

    const { getByText } = render(<ButtonComponent title="" />);

    expect(() => getByText("")).toThrow();
  });
});
