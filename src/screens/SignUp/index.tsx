import React, { useState } from "react";

import { useTheme } from "styled-components/native";
import { Controller, useForm } from "react-hook-form";

import {
  Container,
  ContainerImage,
  ContentHeader,
  ContentInputs,
  Subtitle,
  TextContent
} from "./styles";
import { Input } from "@components/Input";
import { Header } from "@components/Header";

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
  return (
    <Container>
      {/* <ContainerImage
        source={require("../../assets/images/ImageBackground.png")}
        resizeMode="cover"
      /> */}

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
        <Input label="Name" keyboardType="default" />
        <Input label="Email" keyboardType="default" />
        <Input label="Password" keyboardType="default" />
        <Input label="Confirm your password" keyboardType="default" />
      </ContentInputs>
    </Container>
  );
}
