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
  openCreditCardModal: () => void; // Adicione esta propriedade
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  selectedPaymentMethod,
  openPaymentMethodModal,
  openCreditCardModal, // Receba a nova propriedade
}) => {
  return (
    <ContainerPayment>
      <SectionPayment>
        <Control>
          <ShippingAddressText2>Payment Method</ShippingAddressText2>
          <ButtonNavigate2 onPress={openPaymentMethodModal}>
            <ButtonText>Alterar</ButtonText>
          </ButtonNavigate2>
        </Control>
        {selectedPaymentMethod && (
          <SelectedPaymentMethodText>
            Selected: {selectedPaymentMethod}
          </SelectedPaymentMethodText>
        )}
        {selectedPaymentMethod === 'CreditCard' && ( // Mostrar informações adicionais quando o cartão de crédito é selecionado
          <TouchableOpacity onPress={openCreditCardModal}>
            <Text>Editar informações do cartão</Text>
          </TouchableOpacity>
        )}
      </SectionPayment>
    </ContainerPayment>
  );
};

export default PaymentSection;
