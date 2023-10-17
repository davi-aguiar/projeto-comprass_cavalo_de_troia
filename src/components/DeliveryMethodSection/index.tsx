import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {
  Container,
  TitleDeliveryStyle,
  SectionDelivery,
  ContainerSlide,
  SelectDelivery,
  ImageStyle,
  MethodName,
} from './styles';

interface DeliveryMethodSectionProps {
  selectedDeliveryMethod: string;
  deliveryMethods: Array<{ name: string; image: any }>;
  handleSelectDeliveryMethod: (method: string) => void;
}

const DeliveryMethodSection: React.FC<DeliveryMethodSectionProps> = ({
  selectedDeliveryMethod,
  deliveryMethods,
  handleSelectDeliveryMethod,
}) => {
  return (
    <Container>
      <TitleDeliveryStyle>Delivery method</TitleDeliveryStyle>
      <SectionDelivery>
        <ContainerSlide horizontal showsHorizontalScrollIndicator={false}>
          {deliveryMethods.map((method, index) => (
            <SelectDelivery
              key={index}
              style={{
                backgroundColor: selectedDeliveryMethod === method.name ? 'red' : 'white',
              }}
              onPress={() => handleSelectDeliveryMethod(method.name)}
            >
              <ImageStyle source={method.image} />
              <MethodName>{method.name}</MethodName>
            </SelectDelivery>
          ))}
        </ContainerSlide>
      </SectionDelivery>
    </Container>
  );
};

export default DeliveryMethodSection;
