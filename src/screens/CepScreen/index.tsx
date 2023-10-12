import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { CepHeader } from "@components/CepHeader";
import { CepInput } from "@components/CepInput";
import { ButtonComponent } from "@components/Buttons";
import axios from "axios";
import { useTheme } from "styled-components/native";
import { Api } from "@services/CepApi";
import { ButtonContainer } from "./styles";

export const CepScreen = () => {
  const { COLORS } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [showIcons, setShowIcons] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const onCheckout = () => {
    console.log('Checkout');
  };

  useEffect(() => {
    if (zipCode.length === 8 && address !== "" && city !== "" && uf !== "" && neighborhood !== "") {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }

    if (zipCode.length === 8) {
      searchZipCode();
    } else {
      setAddress("");
      setNeighborhood("");
      setCity("");
      setUf("");
      setShowIcons(false);
    }
  }, [zipCode, address, city, uf, neighborhood]);

  const isZipCodeNotEditable = zipCode.length !== 0 && zipCode.length < 8;

  const searchZipCode = async () => {
    if (zipCode === "") {
      Alert.alert("Invalid zip code");
      setZipCode("");
      setShowIcons(false);
    } else {
      try {
        setIsLoading(true);
        const response = await Api.get(`/${zipCode}/json`);

        if (!!response.data.logradouro) {
          setAddress(response.data.logradouro);
          setNeighborhood(response.data.bairro);
          setCity(response.data.localidade);
          setUf(response.data.uf);
          setShowIcons(true);
        } else {
          setShowIcons(false);
        }
      } catch (error) {
        console.log("Error: " + error);
        setShowIcons(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <ScrollView>
      <CepHeader text="Adding Shipping Address" onBackPress={onCheckout} />
      <CepInput
        text="Zip Code (Postal Code)"
        zipCode={zipCode}
        onZipCodeChange={setZipCode}
        maxLength={8}
        isLoading={isLoading}
        isDisabled={false}
        showIcons={showIcons}
      />
      <CepInput
        text="Address"
        zipCode={address}
        onZipCodeChange={setAddress}
        maxLength={20}
        isLoading={false}
        isDisabled={isZipCodeNotEditable}
        showIcons={false}
      />
      <CepInput
        text="City"
        zipCode={city}
        onZipCodeChange={setCity}
        maxLength={20}
        isLoading={false}
        isDisabled={isZipCodeNotEditable}
        showIcons={false}
      />
      <CepInput
        text="State/Province/Region"
        zipCode={uf}
        onZipCodeChange={setUf}
        maxLength={20}
        isLoading={false}
        isDisabled={isZipCodeNotEditable}
        showIcons={false}
      />
      <CepInput
        text="Full name"
        zipCode={neighborhood}
        onZipCodeChange={setNeighborhood}
        maxLength={20}
        isLoading={false}
        isDisabled={isZipCodeNotEditable}
        showIcons={false}
      />
      <ButtonContainer>
        <ButtonComponent title="SAVE ADDRESS" width={343} height={48} isDisabled={!isButtonEnabled} />
        </ButtonContainer>
    </ScrollView>
  );
};
