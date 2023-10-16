import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonContent,
  Container,
  ContainerEmailInput,
  ContainerText,
  ContentInputs,
  DontLog,
  DontLoginText,
  ForgotContainer,
  ForgotPasswordText,
  ImageLogoBG,
  LogoComprass,
  SignUpContainer,
  SignUpText
} from "./styles";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { ButtonComponent } from "@components/Buttons";
import { ToastAndroid, View } from "react-native";
import { api } from "@services/API";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SignUp } from "@screens/SignUp";
import { AuthProps } from "@routes/auth.routes";
import { useStore } from "zustand";
import useStoreData from "../../context";
import { Profile } from "@screens/Profile";

export function Login() {
  type FormType = { name: string; email: string; password: string };

  const navigation = useNavigation<AuthProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const { colors } = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormType>({});

  const store = useStoreData();

  const handleFormSubmit = async (data: FormType) => {
    try {
      setIsLoading(true);

      const requestData = {
        email: data.email,
        password: data.password
      };
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password
      });

      if (response) {
        setIsSubmitSuccessful(true);
        ToastAndroid.show("User Logged", ToastAndroid.LONG);
        console.log(response);

        store.setName(data.name);
        store.setEmail(data.email);
      } else {
        ToastAndroid.show("", ToastAndroid.LONG);
        // const errorData = await response();
        // setEmailErrorMessage(errorData.error);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsLoading(false);
      navigation.navigate("Profile");
    }
  };

  return (
    <Container>
      <StatusBar style="light" backgroundColor="#111213" />
      <ImageLogoBG source={require("../../assets/images/ImageBackground.png")}>
        <LogoComprass
          source={require("../../assets/images/ComprassLogo.png")}
        />
        <ContentInputs>
          <ContainerEmailInput>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Email"
                  keyboardType="default"
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </ContainerEmailInput>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Password"
                keyboardType="default"
                value={value}
                showIcon
                secureTextEntry
                onChangeText={onChange}
              />
            )}
          />
        </ContentInputs>

        <ButtonContent>
          <ButtonComponent
            title="LOGIN"
            isLoading={isLoading}
            height={48}
            onPress={handleSubmit(handleFormSubmit)}
          />
        </ButtonContent>

        <ContainerText>
          <SignUpContainer onPress={() => navigation.navigate("SignUp")}>
            <SignUpText>Not have an account yet? {"\n"}Sign up</SignUpText>
          </SignUpContainer>
          <ForgotContainer
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <ForgotPasswordText> Forgot your password?</ForgotPasswordText>
          </ForgotContainer>
          <DontLog>
            <DontLoginText>
              <DontLoginText> I dont Want Login</DontLoginText>
            </DontLoginText>
          </DontLog>
        </ContainerText>
      </ImageLogoBG>
    </Container>
  );
}
