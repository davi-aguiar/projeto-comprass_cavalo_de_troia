import { ButtonComponent } from "@components/Buttons";
import React from "react";
import {
  BackgroundImage1,
  Container,
  Container2,
  
  Text2,
  Text3,
} from "./styles";




export const SucessScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const { selectedPaymentMethod } = route.params;
  
  const onScreenPaymentCreditCard = () => {
    if (selectedPaymentMethod === 'CreditCard') {
      navigation.navigate('CreditCardScreen');
    }
  };

  const onScreenPaymentBoleto = () => {
    if (selectedPaymentMethod === 'Boleto') {
      navigation.navigate('BoletoScreen');
    }
  };

  const onScreenPaymentPix = () => {
    if (selectedPaymentMethod === 'Pix') {
      navigation.navigate('PixScreen');
    }
  };
  return(
  
    <BackgroundImage1
    source={require("../../assets/images/sucess.png")}
  >
    <Container>
      <Text3>Sucess!</Text3>
      <Text2>Your order will be delivered soon.</Text2>
      <Text2>Thank you for choosing our app!</Text2>
    </Container>
    <Container2>
      <ButtonComponent
        title="Continue"
        width={160}
        height={36}
        onPress={() => {
          if (selectedPaymentMethod === "CreditCard") {
            onScreenPaymentCreditCard();
          } else if (selectedPaymentMethod === "Boleto") {
            onScreenPaymentBoleto();
          } else if (selectedPaymentMethod === "Pix") {
            onScreenPaymentPix();
          }
        }}
      />
    </Container2>
  </BackgroundImage1>
);
};

