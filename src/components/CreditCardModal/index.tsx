import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

interface CreditCardModalProps {
  visible: boolean;
  onClose: () => void;
  onAddCreditCard: (creditCard: CreditCardData) => void;
  isNested: boolean; // Nova propriedade para determinar se é um modal aninhado
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
  isNested, // Receba a nova propriedade
}) => {
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [cardType, setCardType] = useState(''); // Adiciona o tipo do cartão

  const handleAddCreditCard = () => {
    const creditCardData: CreditCardData = {
      nameOnCard,
      cardNumber,
      expireDate,
      cvv,
    };
    onAddCreditCard(creditCardData);
  };

  // Verificar se todos os campos estão preenchidos
  const checkFormValidity = () => {
    setIsFormValid(!!nameOnCard && !!cardNumber && !!expireDate && !!cvv);
  };

  // Função para formatar o número do cartão com espaços a cada 4 dígitos
  const formatCardNumber = (text: string) => {
    // Remover todos os espaços existentes
    const cardNumberWithoutSpaces = text.replace(/\s/g, '');

    // Adicionar espaços a cada 4 dígitos
    let formattedCardNumber = '';
    for (let i = 0; i < cardNumberWithoutSpaces.length; i += 4) {
      formattedCardNumber += cardNumberWithoutSpaces.slice(i, i + 4) + ' ';
    }

    // Remover o espaço extra no final, se houver
    formattedCardNumber = formattedCardNumber.trim();

    // Atualizar o estado do campo do cartão formatado
    setCardNumber(formattedCardNumber);

    // Verificar a validade do formulário
    checkFormValidity();

    // Identificar o tipo do cartão
    if (cardNumberWithoutSpaces.startsWith('4')) {
      setCardType('visa');
    } else if (cardNumberWithoutSpaces.startsWith('5')) {
      setCardType('mastercard');
    } else {
      setCardType('generic'); // Tipo genérico se não for Visa nem Mastercard
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Credit Card</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Name on Card"
            value={nameOnCard}
            onChangeText={(text) => {
              // Permitir apenas letras
              const lettersOnly = text.replace(/[^a-zA-Z ]/g, '');
              setNameOnCard(lettersOnly);
              checkFormValidity();
            }}
          />
          <View style={styles.cardNumberInputContainer}>
            <TextInput
              style={styles.cardNumberInput}
              placeholder="Card Number"
              value={cardNumber}
              onChangeText={(text) => {
                // Permitir apenas números
                const numbersOnly = text.replace(/[^0-9 ]/g, '');
                formatCardNumber(numbersOnly);
                checkFormValidity();
              }}
              maxLength={19} // Inclui espaço extra a cada 4 dígitos
              keyboardType="numeric"
            />
            {cardType === 'visa' && (
              <Image
                style={styles.cardVisaImage}
                source={require('../../assets/images/visa.png')}
              />
            )}
            {cardType === 'mastercard' && (
              <Image
                style={styles.cardTypeImage}
                source={require('../../assets/images/mastercard.png')}
              />
            )}
            {cardType === 'generic' && (
              <Image
                style={styles.cardTypeImage}
                source={require('../../assets/images/generic.png')}
              />
            )}
          </View>
          <TextInput
            style={styles.modalInput}
            placeholder="Expire Date"
            value={expireDate}
            onChangeText={(text) => {
              setExpireDate(text);
              checkFormValidity();
            }}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => {
              // Permitir apenas 3 números
              const cvvOnly = text.replace(/[^0-9]/g, '').slice(0, 3);
              setCVV(cvvOnly);
              checkFormValidity();
            }}
            keyboardType="numeric"
          />

          {isNested && (
            <TouchableOpacity
              style={isFormValid ? styles.modalButton : styles.modalButtonDisabled}
              onPress={() => {
                if (isFormValid) {
                  onAddCreditCard({
                    nameOnCard,
                    cardNumber: cardNumber.replace(/\s/g, ''), // Remover espaços antes de enviar
                    expireDate,
                    cvv,
                  });
                  onClose();
                }
              }}
            >
              <Text style={styles.TextButton}>ADD CARD</Text>
            </TouchableOpacity>
          )}
      
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '100%',
    height: '55%',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  modalInput: {
    height: 64,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  cardNumberInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumberInput: {
    flex: 1,
    height: 64,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  cardVisaImage: {
    width: 40,
    height: 25,
    marginLeft: 10,
  },
  cardTypeImage: {
    width: 32,
    height: 25,
    marginLeft: 10,
  },
  modalButton: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  TextButton: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  modalButtonDisabled: {
    backgroundColor: 'lightgray', // Botão desativado
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  modalClose: {
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default CreditCardModal;
