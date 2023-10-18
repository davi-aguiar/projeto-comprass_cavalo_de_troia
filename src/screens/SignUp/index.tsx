import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonContent,
  Container,
  ContainerEmail,
  ContainerImage,
  ContainerName,
  ContainerPassword,
  ContentHeader,
  ContentInputs,
  Subtitle,
  TextContent
} from "./styles";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { ButtonComponent } from "@components/Buttons";
import { ScrollView, ToastAndroid } from "react-native";
import { UserCreation } from "../../requests/UserCreation";
import { useNavigation } from "@react-navigation/native";
import { AuthProps } from "@routes/auth.routes";
import { StatusBar } from "expo-status-bar";
import { signUpSchema } from "@utils/Validations/SignUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export function SignUp() {
  type FormType = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
  };

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
  } = useForm<FormType>({
    resolver: yupResolver(signUpSchema)
  });

  function handleGoToLogin() {
    navigation.navigate("Login");
    setEmailErrorMessage("");
  }

  function handleGoBack() {
    navigation.goBack();
    setEmailErrorMessage("");
  }
  const handleFormSubmit = async ({ name, email, password }: FormType) => {
    try {
      setIsLoading(true);
      await UserCreation({ name, email, password });

      setIsSubmitSuccessful(true);
      ToastAndroid.show("User created", ToastAndroid.LONG);
    } catch (error) {
      ToastAndroid.show(
        "User not created,something went wrong",
        ToastAndroid.LONG
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <StatusBar style="light" backgroundColor="#111213" />

        <ContainerImage
          source={require("../../assets/images/ImageBackground.png")}
          resizeMode="cover"
        >
          <ContentHeader>
            <Header title="SignUp" showBackButton onPress={handleGoToLogin} />
          </ContentHeader>

          <TextContent>
            <Subtitle>
              {" "}
              Choose a really cool name that only contains spaces as special
              characters. Oh, and your password must have more than 4 digits!
            </Subtitle>
          </TextContent>

          <ContentInputs>
            <ContainerName>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Name"
                    keyboardType="default"
                    value={value}
                    onChangeText={onChange}
                    showIcon
                    errorMessage={errors.name?.message}
                  />
                )}
              />
            </ContainerName>

            <ContainerEmail>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Email"
                    keyboardType="email-address"
                    value={value}
                    showIcon
                    onChangeText={onChange}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
            </ContainerEmail>

            <ContainerPassword>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Password"
                    keyboardType="default"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    isPasswordField
                    errorMessage={errors.password?.message}
                  />
                )}
              />
            </ContainerPassword>
            <Controller
              name="confirm_password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Confirm your password"
                  keyboardType="default"
                  secureTextEntry
                  value={value}
                  isPasswordField
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </ContentInputs>

          <ButtonContent>
            <ButtonComponent
              title="SIGN UP"
              height={48}
              isLoading={isLoading}
              onPress={handleSubmit(handleFormSubmit)}
            />
          </ButtonContent>
        </ContainerImage>
      </ScrollView>
    </Container>
  );
}
