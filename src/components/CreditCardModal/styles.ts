import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: white;
  width: 100%;
  height: 55%;
  padding: 20px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: center;
`;

export const ModalInput = styled.TextInput`
  height: 64px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const CardNumberInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardNumberInput = styled.TextInput`
  flex: 1;
  height: 64px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const CardVisaImage = styled.Image`
  width: 40px;
  height: 25px;
  margin-left: 10px;
`;

export const CardTypeImage = styled.Image`
  width: 32px;
  height: 25px;
  margin-left: 10px;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: red;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TextButton = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
`;

export const ModalButtonDisabled = styled.TouchableOpacity`
  background-color: lightgrey;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ModalClose = styled.View`
  padding: 10px;
  margin-top: 10px;
  align-items: center;
`;
