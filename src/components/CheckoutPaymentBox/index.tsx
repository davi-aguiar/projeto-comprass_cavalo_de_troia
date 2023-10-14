import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  ContainerPayment,
  SectionPayment,
  Control,
  ShippingAddressText2,
  ButtonNavigate2,
  SelectedPaymentMethodText,
  ButtonText,
} from './styles';

interface PaymentSectionProps {
  selectedPaymentMethod: string | null;
  openPaymentMethodModal: () => void;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ selectedPaymentMethod, openPaymentMethodModal }) => {
  return (
    <ContainerPayment>
      <SectionPayment>
        <Control>
          <ShippingAddressText2>Payment Method:</ShippingAddressText2>
          <ButtonNavigate2 onPress={openPaymentMethodModal}>
            <ButtonText>Change</ButtonText>
          </ButtonNavigate2>
        </Control>
        {selectedPaymentMethod && (
          <SelectedPaymentMethodText>
            Selected: {selectedPaymentMethod}
          </SelectedPaymentMethodText>
        )}
      </SectionPayment>
    </ContainerPayment>
  );
};

export default PaymentSection;
