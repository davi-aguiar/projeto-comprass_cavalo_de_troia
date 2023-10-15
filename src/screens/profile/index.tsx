import React, { useEffect, useState } from "react";
import { Switch, TouchableOpacity, Modal, Alert } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { api } from "@services/API";
import {
  CenteredView,
  ConfirmButton,
  Container,
  ConteinerConfirmButton,
  ConteinerLogin,
  ConteinerOptions,
  EditButton,
  Image,
  ImageConteiner,
  InfosConteiner,
  LoginButton,
  LoginButtonText,
  ModalButton,
  ModalOptions,
  ModalTitle,
  ProfileEmail,
  ProfileName,
  ProfileNameInput,
  ProfileOptions,
  ProfileOptionsText,
  StyledText,
  TextLogin,
  Title,
  TitleConteiner,
} from "./styles";

export function Profile() {
  const [editIsEnabled, setEditIsEnabled] = useState(false);
  const [name, setName] = useState("Juliane Golçalves Freitas");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(
    "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [englishSelected, setEnglishSelected] = useState(false);
  const [portugueseSelected, setPortugueseSelected] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const englishTextColor = englishSelected ? "white" : "black";
  const portguesTextColor = portugueseSelected ? "white" : "black";
  const englishButtonColor = englishSelected ? "#DB3022" : "white";
  const portguesButtonColor = portugueseSelected ? "#DB3022" : "white";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE0LCJpYXQiOjE2OTc0MDQ3MjIsImV4cCI6MTY5OTEzMjcyMn0.ZY3cAZ_GI9Rl3zsfS4iyW9KniuEkSh_U6YoKdfqpBfc";

  const config = {
    headers: { Authorization: "Bearer " + token },
  };

  useEffect(() => {
    handlePerfil();
  }, []);

  async function handlePerfil() {
    try {
      const response = await api.get(`/auth/profile`, config);
      if (response) {
        setEmail(response.data.email);
        setName(response.data.name);
        setAvatar(response.data.avatar);
      }
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  }

  async function editPerfil(id: string) {
    try {
      console.log(name);
      const data = { name: name };
      const response = await api.put(
        `/users/${id}
        `,
        data
      );

      console.log(JSON.stringify(data));
      if (response) {
        console.log(response.data);
        setName(response.data.name);
        setAvatar(response.data.avatar);
      }
    } catch (error) {
      alert(error);
    }
  }

  function goToLogin() {}

  function toggleSwitch() {
    if (editIsEnabled == true) {
      Alert.alert(
        "Warning",
        "Do you want to abandon your changes?",
        [
          {
            text: "Yes",
            onPress: () => setEditIsEnabled((previousState) => !previousState),
            style: "destructive",
          },
          { text: "No" },
        ],
        { cancelable: false }
      );
    } else {
      setEditIsEnabled((previousState) => !previousState);
    }
  }

  function selectEnglish() {
    setEnglishSelected(true);
    setPortugueseSelected(false);
  }

  function selectPortuguese() {
    setPortugueseSelected(true);
    setEnglishSelected(false);
  }

  function handleOnChangeName(newName: string) {
    setName(newName);
  }

  function confirmEditing() {
    editPerfil("14");
    setEditIsEnabled((previousState) => !previousState);
  }

  function logOut() {
    Alert.alert(
      "Warning",
      "Do you really want to leave?",
      [
        {
          text: "Yes",
          onPress: () => console.log("Deslogou"),
          style: "destructive",
        },
        { text: "No" },
      ],
      { cancelable: false }
    );
  }

  if (isAuthenticated) {
    return (
      <Container>
        <ConteinerConfirmButton>
          {editIsEnabled && (
            <ConfirmButton onPress={confirmEditing}>
              <AntDesign name="check" size={24} color="white" />
            </ConfirmButton>
          )}
        </ConteinerConfirmButton>
        <TitleConteiner>
          <Title>My profile</Title>
        </TitleConteiner>
        <ImageConteiner>
          <Image source={{ uri: avatar }} />
          {editIsEnabled && (
            <EditButton>
              <MaterialIcons name="mode-edit" size={24} color="white" />
            </EditButton>
          )}
        </ImageConteiner>
        <InfosConteiner>
          {editIsEnabled ? (
            <ProfileNameInput
              value={name}
              onChangeText={handleOnChangeName}
            ></ProfileNameInput>
          ) : (
            <ProfileName>{name}</ProfileName>
          )}
          <ProfileEmail>{email}</ProfileEmail>
        </InfosConteiner>

        <ConteinerOptions>
          <ProfileOptions>
            <ProfileOptionsText>Edit Informations</ProfileOptionsText>
            <Switch onValueChange={toggleSwitch} value={editIsEnabled}></Switch>
          </ProfileOptions>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ProfileOptions>
              <ProfileOptionsText>Language</ProfileOptionsText>
              <AntDesign name="down" size={24} color="black" />
            </ProfileOptions>
          </TouchableOpacity>
          <TouchableOpacity onPress={logOut}>
            <ProfileOptions>
              <ProfileOptionsText>Log out</ProfileOptionsText>
              <AntDesign name="logout" size={24} color="black" />
            </ProfileOptions>
          </TouchableOpacity>
        </ConteinerOptions>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <CenteredView
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ModalOptions>
              <ModalTitle>Languages</ModalTitle>
              <ModalButton color={englishButtonColor} onPress={selectEnglish}>
                <StyledText color={englishTextColor}>English</StyledText>
              </ModalButton>
              <ModalButton
                color={portguesButtonColor}
                onPress={selectPortuguese}
              >
                <StyledText color={portguesTextColor}>
                  Portugues - Brazil
                </StyledText>
              </ModalButton>
            </ModalOptions>
          </CenteredView>
        </Modal>
      </Container>
    );
  } else {
    return (
      <Container>
        <ConteinerConfirmButton></ConteinerConfirmButton>
        <TitleConteiner>
          <Title>My profile</Title>
        </TitleConteiner>
        <ConteinerLogin>
          <TextLogin>You need to log in to see your details</TextLogin>
          <LoginButton onPress={goToLogin}>
            <LoginButtonText>LOGIN</LoginButtonText>
          </LoginButton>
        </ConteinerLogin>
        <ConteinerOptions>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <ProfileOptions>
              <ProfileOptionsText>Language</ProfileOptionsText>
              <AntDesign name="down" size={24} color="black" />
            </ProfileOptions>
          </TouchableOpacity>
        </ConteinerOptions>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <CenteredView
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <ModalOptions>
              <ModalTitle>Languages</ModalTitle>
              <ModalButton color={englishButtonColor} onPress={selectEnglish}>
                <StyledText color={englishTextColor}>English</StyledText>
              </ModalButton>
              <ModalButton
                color={portguesButtonColor}
                onPress={selectPortuguese}
              >
                <StyledText color={portguesTextColor}>
                  Portugues - Brazil
                </StyledText>
              </ModalButton>
            </ModalOptions>
          </CenteredView>
        </Modal>
      </Container>
    );
  }
}
