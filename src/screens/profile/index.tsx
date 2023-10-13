import React, { useState } from "react";
import { Switch, TouchableOpacity, Modal, Alert } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [englishSelected, setEnglishSelected] = useState(false);
  const [portugueseSelected, setPortugueseSelected] = useState(false);
  const [logged, setLogged] = useState(true);

  const englishTextColor = englishSelected ? "white" : "black";
  const portguesTextColor = portugueseSelected ? "white" : "black";
  const englishButtonColor = englishSelected ? "#DB3022" : "white";
  const portguesButtonColor = portugueseSelected ? "#DB3022" : "white";

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
    toggleSwitch();
    console.log("editou");
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
  if (logged) {
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
          <Image source={require("@screens/profile/image.png")} />
          {editIsEnabled && (
            <EditButton>
              <MaterialIcons name="mode-edit" size={24} color="white" />
            </EditButton>
          )}
        </ImageConteiner>
        <InfosConteiner>
          {editIsEnabled ? (
            <ProfileName
              value={name}
              onChangeText={handleOnChangeName}
            ></ProfileName>
          ) : (
            <ProfileName>{name}</ProfileName>
          )}
          <ProfileEmail>matildabrown@mail.com</ProfileEmail>
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
