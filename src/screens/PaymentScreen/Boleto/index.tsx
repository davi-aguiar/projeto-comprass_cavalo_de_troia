import React from 'react';
import { Text, View, Image } from 'react-native';
import { ButtonComponent } from '@components/Buttons';
import {
  Container1,
  BackgroundImage,
  Container,
  Text as StyledText,
  Text2 as StyledText2,
  Footer,
  Footer2,
} from './styles';

export const BankVoucherScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Container1>
      <Container>
        <BackgroundImage source={require('../../../assets/images/bags1.png')} />
        <StyledText>Sucess!</StyledText>
        <StyledText2>Your order will be delivered soon.</StyledText2>
        <StyledText2>Thank you for choosing our app!</StyledText2>
      </Container>
      <Footer>
        <ButtonComponent title="DONWLOAD BANK VOUCHER" width={343} height={48} />
      </Footer>
      <Footer2>
        <ButtonComponent title="CONTINUE SHOPPING" width={343} height={48} />
      </Footer2>
    </Container1>
  );
};
