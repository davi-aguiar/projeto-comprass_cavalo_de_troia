import styled from 'styled-components/native';
import theme from '../../theme';// 
export const ContainerPayment = styled.View`
  align-items: center;
  margin-top: 13px;
`;

export const SectionPayment = styled.View`
  width: 343px;
  height: 67px;
`;

export const Control = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const ShippingAddressText2 = styled.Text`
   font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
  color: ${theme.COLORS.BLACK_800};
`;

export const ButtonNavigate2 = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const SelectedPaymentMethodText = styled.Text`
  font-size: ${theme.FONT_SIZE.SM}px;
  margin-left: 5px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const ButtonText = styled.Text`
  color: ${theme.COLORS.RED_500};
  font-size: ${theme.FONT_SIZE.SM}px;
  font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
`;