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
  SignUpText,
} from "./styles";
import { Input } from "@components/Input";
import { ButtonComponent } from "@components/Buttons";
import { ToastAndroid, View } from "react-native";
import { api } from "@services/API";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AuthProps } from "@routes/auth.routes";
import { useStore } from "zustand";
import { yupResolver } from "@hookform/resolvers/yup";
import useStoreData from "../../context/UserStore";
import authData from "../../context/index";
import { loginSchema } from "@utils/Validations/SignIn";

export function Login() {
  type FormType = { name: string; email: string; password: string };

  const navigation = useNavigation<AuthProps>();
  const setToken = authData((state) => state.setToken);
  const setisAuthenticated = authData((state) => state.setIsAuthenticated);
  const token = authData((state) => state.token);
  const [isLoading, setIsLoading] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const { colors } = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(loginSchema),
  });

  const store = useStoreData();

  const handleFormSubmit = async (data: FormType) => {
    try {
      setIsLoading(true);
      const requestData = {
        email: data.email,
        password: data.password,
      };
      const response = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
      });

      if (response) {
        setToken(response.data.access_token);
        setisAuthenticated(true);
        setIsSubmitSuccessful(true);
        ToastAndroid.show("User Logged", ToastAndroid.LONG);
        navigation.navigate("AppRoutes");

        store.setName(data.name);
        store.setEmail(data.email);
      } else {
        ToastAndroid.show(
          "Something went wrong, check the inputs",
          ToastAndroid.LONG
        );
      }
    } catch (error) {
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
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Email"
                  keyboardType="default"
                  value={value}
                  showIcon
                  onChangeText={onChange}
                  isDisabled={false}
                  errorMessage={errors.email?.message}
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
                isPasswordField
                isDisabled={false}
                errorMessage={errors.password?.message}
              />
            )}
          />
        </ContentInputs>

        <ButtonContent>
          <ButtonComponent
            title="LOGIN"
            isLoading={isLoading}
            height={48}
            width={343}
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
          <DontLog onPress={() => navigation.navigate("AppRoutes")}>
            <DontLoginText>
              <DontLoginText> I dont Want Login</DontLoginText>
            </DontLoginText>
          </DontLog>
        </ContainerText>
      </ImageLogoBG>
    </Container>
  );
}
