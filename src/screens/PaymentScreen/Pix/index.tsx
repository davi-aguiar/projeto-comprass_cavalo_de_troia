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
} from './styles';

export const PixScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Container1>
      <Container>
        <BackgroundImage source={require('../../../assets/images/QRCode.png')} />
        <StyledText>Sucess!</StyledText>
        <StyledText2>
          Pay your pix using the QR code above and 
        </StyledText2>
        <StyledText2>
        then follow the steps sent by email.
        </StyledText2>
      </Container>
      <Footer>
        <ButtonComponent title="CONTINUE SHOPPING" width={343} height={48} />
      </Footer>
    </Container1>
  );
};
