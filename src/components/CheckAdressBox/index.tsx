import React from "react";
import { Text } from "react-native";
import {
  Container,
  Container1,
  ShippingAddressText,
  TitleAdress,
  ButtonNavigate,
  ButtonText,
  AddAdress,
} from "./styles";

interface ShippingAddressProps {
  addressData: {
    address: string;
    city: string;
    neighborhood: string;
  };
  onShippingAddressPress: () => void;
}

export const CheckAddressBox: React.FC<ShippingAddressProps> = ({
  addressData,
  onShippingAddressPress,
}) => {
  return (
    <Container>
      <Container1>
        <ShippingAddressText>Shipping Address</ShippingAddressText>
        <TitleAdress>
          <ButtonNavigate onPress={onShippingAddressPress}>
            <ButtonText>Change</ButtonText>
          </ButtonNavigate>
          <AddAdress onPress={onShippingAddressPress}>
            <Text>{addressData.city}</Text>
            <Text>{addressData.address || "Click to add an address"}</Text>
            <Text>{addressData.neighborhood}</Text>
          </AddAdress>
        </TitleAdress>
      </Container1>
    </Container>
  );
};
