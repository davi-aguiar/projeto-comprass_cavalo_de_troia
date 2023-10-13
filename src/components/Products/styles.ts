import styled from 'styled-components/native';
import theme from '../../theme';

export const VerticalScrollView = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
`;

export const LoadingText = styled.Text``;

export const CategoryContainer = styled.View``;

export const CategoryText = styled.Text`
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
  margin-top: 21px;
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const HorizontalScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ProductsContainer = styled.View`
  flex-direction: row;
`;

export const ProductItemContainer = styled.View`
  flex: 1;
  margin: 8px;
  background-color: ${theme.COLORS.WHITE};
  padding: 16px;
  border-radius: 8px;
`;

export const CounterContainer = styled.View`
  flex-direction: row;
`;

export const TouchableButton = styled.TouchableOpacity``;

export const ButtonImage = styled.Image``;

export const CounterText = styled.Text`
  font-size: ${theme.FONT_SIZE.XS}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  margin-horizontal: 20px;
`;

export const ProductBox = styled.View`
  margin-left: 16px;
  margin-right: 16px;
`;

export const ProductImage = styled.Image`
  width: 150px;
  height: 184px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const ProductName = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 4px;
  color: ${theme.COLORS.GRAY_500};
`;

export const ProductPrice = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.EXTRA_BOLD};
  color: ${theme.COLORS.RED_500};
`;
