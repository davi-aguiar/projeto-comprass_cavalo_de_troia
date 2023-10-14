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
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  align-self: center;
`;

export const ModalOption = styled.TouchableOpacity`
  justify-content: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: lightgray;
`;

export const SelectedOption = styled(ModalOption)`
  background-color: red;
`;

export const ModalClose = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 10px;
  align-items: center;
`;
