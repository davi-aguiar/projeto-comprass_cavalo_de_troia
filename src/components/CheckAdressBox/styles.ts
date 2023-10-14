import styled from 'styled-components/native';
import { useTheme } from "styled-components/native";
import theme from '../../theme';// Importe o arquivo Theme.ts

export const Container = styled.View`
  align-items: center;
`;

export const Container1 = styled.View`
  width: 343px;
  height: 146px;
`;

export const ShippingAddressText = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  color: ${theme.COLORS.BLACK_800};
  padding-bottom: 5px;
`;

export const TitleAdress = styled.View`
  width: 343px;
  height: 108px;
  elevation: 2;
  border-radius: 1px;
  background-color: ${theme.COLORS.WHITE};
`;

export const ButtonNavigate = styled.TouchableOpacity`
  align-self: flex-end;
  margin-right: 18px;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  color: ${theme.COLORS.RED_500};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
`;

export const AddAdress = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 15px;
`;
