import React from 'react';
import { View, Text } from 'react-native';
import {
  Container,
  Container2,
  Order,
  Delivery,
  Summary,
  OrderAndDeliveryText,
  SummaryText,
} from './styles';

interface OrderSummaryProps {
  orderAmount: string;
  deliveryAmount: string;
  summaryAmount: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderAmount, deliveryAmount, summaryAmount }) => {
  return (
    <Container>
      <Container2>
        <Order>
          <OrderAndDeliveryText>Order</OrderAndDeliveryText>
          <Text>{orderAmount}</Text>
        </Order>
        <Delivery>
          <OrderAndDeliveryText>Delivery</OrderAndDeliveryText>
          <Text>{deliveryAmount}</Text>
        </Delivery>
        <Summary>
          <SummaryText>Summary</SummaryText>
          <Text>{summaryAmount}</Text>
        </Summary>
      </Container2>
    </Container>
  );
};

export default OrderSummary;
