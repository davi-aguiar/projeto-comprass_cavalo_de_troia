import React, { useState } from 'react';
import { Modal } from 'react-native';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalInput,
  CardNumberInputContainer,
  CardNumberInput,
  CardVisaImage,
  CardTypeImage,
  ModalButton,
  TextButton,
  ModalButtonDisabled,
  ModalClose,
} from './styles';

interface CreditCardModalProps {
  visible: boolean;
  onClose: () => void;
  onAddCreditCard: (creditCard: CreditCardData) => void;
  isNested: boolean;
}

interface CreditCardData {
  nameOnCard: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
}

const CreditCardModal: React.FC<CreditCardModalProps> = ({
  visible,
  onClose,
  onAddCreditCard,
  isNested,
}) => {
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [cardType, setCardType] = useState('');

  const handleAddCreditCard = () => {
    const creditCardData: CreditCardData = {
      nameOnCard,
      cardNumber,
      expireDate,
      cvv,
    };
    onAddCreditCard(creditCardData);
  };

  const checkFormValidity = () => {
    setIsFormValid(!!nameOnCard && !!cardNumber && !!expireDate && !!cvv);
  };

  const formatCardNumber = (text: string) => {
    const cardNumberWithoutSpaces = text.replace(/\s/g, '');
    let formattedCardNumber = '';
    for (let i = 0; i < cardNumberWithoutSpaces.length; i += 4) {
      formattedCardNumber += cardNumberWithoutSpaces.slice(i, i + 4) + ' ';
    }
    formattedCardNumber = formattedCardNumber.trim();

    setCardNumber(formattedCardNumber);
    checkFormValidity();

    if (cardNumberWithoutSpaces.startsWith('4')) {
      setCardType('visa');
    } else if (cardNumberWithoutSpaces.startsWith('5')) {
      setCardType('mastercard');
    } else {
      setCardType('generic');
    }
  };

  return (
    <Modal transparent={true} animationType="slide" visible={visible} onRequestClose={onClose}>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Add Credit Card</ModalTitle>
          <ModalInput
            placeholder="Name on Card"
            value={nameOnCard}
            onChangeText={(text) => {
              const lettersOnly = text.replace(/[^a-zA-Z ]/g, '');
              setNameOnCard(lettersOnly);
              checkFormValidity();
            }}
          />
          <CardNumberInputContainer>
            <CardNumberInput
              placeholder="Card Number"
              value={cardNumber}
              onChangeText={(text) => {
                const numbersOnly = text.replace(/[^0-9 ]/g, '');
                formatCardNumber(numbersOnly);
                checkFormValidity();
              }}
              maxLength={19}
              keyboardType="numeric"
            />
            {cardType === 'visa' && <CardVisaImage source={require('../../assets/images/visa.png')} />}
            {cardType === 'mastercard' && (
              <CardTypeImage source={require('../../assets/images/mastercard.png')} />
            )}
            {cardType === 'generic' && (
              <CardTypeImage source={require('../../assets/images/generic.png')} />
            )}
          </CardNumberInputContainer>
          <ModalInput
            placeholder="Expire Date"
            value={expireDate}
            onChangeText={(text) => {
              setExpireDate(text);
              checkFormValidity();
            }}
          />
          <ModalInput
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => {
              const cvvOnly = text.replace(/[^0-9]/g, '').slice(0, 3);
              setCVV(cvvOnly);
              checkFormValidity();
            }}
            keyboardType="numeric"
          />
          {isNested && (
            <ModalButton
              onPress={() => {
                if (isFormValid) {
                  onAddCreditCard({
                    nameOnCard,
                    cardNumber: cardNumber.replace(/\s/g, ''),
                    expireDate,
                    cvv,
                  });
                  onClose();
                }
              }}
            >
              <TextButton>ADD CARD</TextButton>
            </ModalButton>
          )}
        </ModalContent>
      
      </ModalContainer>
    </Modal>
  );
};

export default CreditCardModal;
