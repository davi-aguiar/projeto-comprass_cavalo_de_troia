import React from "react";

import { View, Text} from "react-native";
import styled from 'styled-components/native'; // Importe styled-components
import theme from "../../theme";
export const Container = styled(View)`
  justify-content: center;
  align-items: center;
  margin-top: 240px;
  
`;

export const ContainerText = styled(View)`
  margin-bottom: 10px;

`
export const TextA = styled(Text)`
  font-size: 16px; 
  text-align: center;

  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
`;


