import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonContainer,
  ButtonContent,
  Container,
  ContainerEmailInput,
  ContainerPasswordInput,
  ContentInputs,
  HeaderContent,
  ImageLogoBG,
  Subtitle,
  TextContent
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
import { fetchAllUsers } from "../../requests/FetchAllUsers";
import { updatePassword } from "../../requests/UpdatePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "@utils/Validations/ForgotPasswordSchema";

export function ForgotPassword() {
  type FormType = { email: string; password: string; confirm_password: string };

  const navigation = useNavigation<AuthProps>();

  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(false);
  const [checkEmail, setCheckEmail] = useState(true);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  function handleGoToLogin() {
    navigation.navigate("Login");
    setEmailErrorMessage("");
  }

  const { colors } = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormType>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const handleFormSubmit = async (data: FormType) => {
    try {
      setIsLoading(true);

      if (user) {
        updatePassword(user.id, data.password);
        console.log(user.id);
        ToastAndroid.show("Password updated successfully", ToastAndroid.LONG);
      } else {
        setEmailErrorMessage("Email not found");
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  async function SearchUserByEmail({ email }: FormType) {
    const users = await fetchAllUsers();

    const userResponse = users.find(
      (user: { email: string }) => user.email === email
    );
    setUser(userResponse);
  }
  return (
    <Container>
      <StatusBar style="light" backgroundColor="#111213" />
      <ImageLogoBG source={require("../../assets/images/ImageBackground.png")}>
        <HeaderContent>
          <Header
            title="Forgot Password"
            showBackButton
            onPress={handleGoToLogin}
          />
        </HeaderContent>
        <TextContent>
          <Subtitle>
            {" "}
            Enter your email and let us see if it exists for you to change your
            password
          </Subtitle>
        </TextContent>

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
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </ContainerEmailInput>
          <ContainerPasswordInput>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="New Password"
                  keyboardType="default"
                  value={value}
                  secureTextEntry
                  onChangeText={onChange}
                  isPasswordField
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </ContainerPasswordInput>
          <Controller
            name="confirm_password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Password"
                keyboardType="default"
                value={value}
                secureTextEntry
                onChangeText={onChange}
                isPasswordField
              />
            )}
          />
        </ContentInputs>

        <ButtonContent>
          <ButtonContainer>
            <ButtonComponent
              title="SEARCH"
              height={48}
              width={343}
              isLoading={isLoading}
              onPress={handleSubmit(SearchUserByEmail)}
            />
          </ButtonContainer>
          <ButtonComponent
            title="CONFIRM"
            height={48}
            width={343}
            isLoading={isLoading}
            onPress={handleSubmit(handleFormSubmit)}
          />
        </ButtonContent>
      </ImageLogoBG>
    </Container>
  );
}
