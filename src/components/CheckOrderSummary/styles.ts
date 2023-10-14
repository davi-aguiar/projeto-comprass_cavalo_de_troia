import styled from 'styled-components/native';
import theme from '../../theme';// Importe o arquivo Theme.ts
export const Container = styled.View`
  width: 100%;
  height: 92px;
  align-items: center;
  margin-top: 20px;
`;

export const Container2 = styled.View`
  width: 340px;
  height: 92px;
  elevation: 2;
  border-radius: 0.5px;
`;

export const Order = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Delivery = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Summary = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const OrderAndDeliveryText = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.SM}px;
`;

export const SummaryText = styled.Text`
  color: ${theme.COLORS.GRAY_500};
  font-size: ${theme.FONT_SIZE.XMD}px;
`;