import React from "react";
import { render } from "@testing-library/react-native";
import { Loading } from "../components/Loading";
import styled from "styled-components/native";

describe("Loading", () => {
  render(<Loading />);
});
