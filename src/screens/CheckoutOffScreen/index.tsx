import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CheckoutHeader } from '@components/CheckoutHeader';
import { ButtonComponent } from '@components/Buttons';
import { Container, TextA, ContainerText} from './styles';
export const CheckoutScreenOff = ({ navigation }: { navigation: any }) => {

  const onCepScreen = () => {
    navigation.navigate('CepScreen');
  };
  return (
    <View>
    
      <CheckoutHeader text="Checkout" onBackPress={onCepScreen} />
      <Container>
        <ContainerText>
        <TextA>
        You need to connect to complete 
        </TextA>
        <TextA>
        your purchase, come on?
        </TextA>
        </ContainerText>
        <ButtonComponent title="LOGIN" width={136} height={48} />
    
    </Container>
    </View>
  );
  }
