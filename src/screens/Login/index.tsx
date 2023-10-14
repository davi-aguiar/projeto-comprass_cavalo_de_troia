import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonContent,
  Container,
  ContainerEmailInput,
  ContainerText,
  ContentInputs,
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
import { SignUp } from "@screens/SignUp";

export function Login() {
  type FormType = { name: string; email: string; password: string };

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
      } else {
        ToastAndroid.show("", ToastAndroid.LONG);
        // const errorData = await response();
        // setEmailErrorMessage(errorData.error);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsLoading(false);
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
              name="name"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Name"
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
                secureTextEntry
                onChangeText={onChange}
              />
            )}
          />
        </ContentInputs>

        <ButtonContent>
          <ButtonComponent
            title="LOGIN"
            height={48}
            onPress={handleSubmit(handleFormSubmit)}
          />
        </ButtonContent>

        <ContainerText>
          <SignUpContainer>
            <SignUpText>Not have an account yet? {"\n"}Sign up</SignUpText>
          </SignUpContainer>
          <ForgotContainer>
            <ForgotPasswordText> Forgot your password?</ForgotPasswordText>
          </ForgotContainer>
          <DontLoginText>
            <DontLoginText> I dont Want Login</DontLoginText>
          </DontLoginText>
        </ContainerText>
      </ImageLogoBG>
    </Container>
  );
}
