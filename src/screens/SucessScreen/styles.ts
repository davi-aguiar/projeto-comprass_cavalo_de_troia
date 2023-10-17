import styled from 'styled-components/native';
import theme from '../../theme'
export const BackgroundImage1 = styled.ImageBackground`
  flex: 1;
  resizeMode: 'cover';
`;

export const Container = styled.View`
  height: 100px;
  marginTop: 130px;
  align-items: center;
  justify-content: center;
`;

export const Container2 = styled.View`
  align-items: center;
`;

export const Text3 = styled.Text`
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  color: ${theme.COLORS.BLACK_800};
  font-size: ${theme.FONT_SIZE.XL}px;
`;

export const Text2 = styled.Text`
font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  color: ${theme.COLORS.BLACK_800};
  font-size: ${theme.FONT_SIZE.MD}px;
  `;
