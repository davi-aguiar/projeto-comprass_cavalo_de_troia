import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalOption,
  SelectedOption,
  ModalClose,
} from './styles';

interface PaymentMethodModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectPaymentMethod: (method: string) => void;
  openCreditCardModal: () => void;
}

const PaymentMethodModal: React.FC<PaymentMethodModalProps> = ({
  visible,
  onClose,
  onSelectPaymentMethod,
  openCreditCardModal, 
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (method: string) => {
    setSelectedOption(method);
    onSelectPaymentMethod(method);
    if (method === 'CreditCard') {
      openCreditCardModal();
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Choose your payment method</ModalTitle>
          <ModalOption
            style={selectedOption === 'CreditCard' ? { backgroundColor: 'red' } : {}}
            onPress={() => handleOptionClick('CreditCard')}
          >
            <Text>Cartão de crédito ou débito</Text>
          </ModalOption>
          <ModalOption
            style={selectedOption === 'Pix' ? { backgroundColor: 'red' } : {}}
            onPress={() => handleOptionClick('Pix')}
          >
            <Text>Pix</Text>
          </ModalOption>
          <ModalOption
            style={selectedOption === 'Boleto' ? { backgroundColor: 'red' } : {}}
            onPress={() => handleOptionClick('Boleto')}
          >
            <Text>Boleto</Text>
          </ModalOption>
          <ModalClose onPress={onClose}>
            <Text>Fechar</Text>
          </ModalClose>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default PaymentMethodModal;
