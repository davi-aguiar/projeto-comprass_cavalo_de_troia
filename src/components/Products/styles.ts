import styled from 'styled-components/native';
import theme from '../../theme';

export const ProductsContainer = styled.View`
  flex-direction: row;
`;

export const ProductItemContainer = styled.View`
  width: 140px;
  margin: 16px;
  border-radius: 6px;
`;

export const CounterContainer = styled.View`
  flex-direction: row;
`;

export const TouchableButton = styled.TouchableOpacity``;

export const ButtonImage = styled.Image``;

export const CounterText = styled.Text`
  font-size: ${theme.FONT_SIZE.XS}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  margin: 0 20px 0 20px;
`;

export const ProductBox = styled.View``;
  
export const ProductImage = styled.Image`
  width: 150px;
  height: 218px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const ProductName = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 4px;
  color: ${theme.COLORS.GRAY_500};
  max-width: 90%;  
`;

export const ProductPrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  /* font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD}; */
  font-weight: 900;
  color: ${({ theme }) => theme.COLORS.RED_500};
`;

export const VerticalScrollView = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  /* flex-grow: 1; */
`;

export const LoadingText = styled.Text``;

export const CategoryContainer = styled.View``;

export const CategoryText = styled.Text`
  font-size: ${theme.FONT_SIZE.XL}px;
  /* font-family: ${theme.FONT_FAMILY.EXTRA_BOLD}; */
  font-weight: 800;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const HorizontalScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;



