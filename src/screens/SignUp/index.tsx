import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  ButtonContent,
  Container,
  ContainerImage,
  ContentHeader,
  ContentInputs,
  Subtitle,
  TextContent
} from "./styles";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { ButtonComponent } from "@components/Buttons";
import { ToastAndroid } from "react-native";
import { api } from "@services/API";
import { UserCreation } from "src/requests/UserCreation";

export function SignUp() {
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

  const handleFormSubmit = async ({ name, email, password }: FormType) => {
    try {
      setIsLoading(true);
      await UserCreation({ name, email, password });

      setIsSubmitSuccessful(true);
      ToastAndroid.show("User created", ToastAndroid.LONG);
      // const errorData = await response();
      // setEmailErrorMessage(errorData.error);
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
      <ContainerImage
        source={require("../../assets/images/ImageBackground.png")}
        resizeMode="cover"
      >
        <ContentHeader>
          <Header title="SignUp" />
        </ContentHeader>

        <TextContent>
          <Subtitle>
            {" "}
            Choose a really cool name that only contains spaces as special
            characters. Oh, and your password must have more than 4 digits!
          </Subtitle>
        </TextContent>

        <ContentInputs>
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
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label="Confirm your password"
                keyboardType="default"
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </ContentInputs>

        <ButtonContent>
          <ButtonComponent
            title="SIGN UP"
            height={48}
            onPress={handleSubmit(handleFormSubmit)}
          />
        </ButtonContent>
      </ContainerImage>
    </Container>
  );
}
