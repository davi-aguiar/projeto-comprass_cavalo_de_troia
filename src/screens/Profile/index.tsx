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
import useStoreData from "@requests/index";

export function Profile() {
  const [editIsEnabled, setEditIsEnabled] = useState(false);
  const [name, setName] = useState("Anônimo");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(
    "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [englishSelected, setEnglishSelected] = useState(false);
  const [portugueseSelected, setPortugueseSelected] = useState(false);
  const [id, setId] = useState("");

  const englishTextColor = englishSelected ? "white" : "black";
  const portguesTextColor = portugueseSelected ? "white" : "black";
  const englishButtonColor = englishSelected ? "#DB3022" : "white";
  const portguesButtonColor = portugueseSelected ? "#DB3022" : "white";

  const token = useStoreData((state) => state.token);
  const isAuthenticated = useStoreData((state) => state.isAuthenticated);
  const setIsAuthenticated = useStoreData((state) => state.setIsAuthenticated);
  const setLanguage = useStoreData((state) => state.setLanguage);

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
        setId(response.data.id);
      }
    } catch (error) {
      alert(error);
    }
  }

  async function editPerfil(id: string) {
    try {
      const data = { name: name };
      const response = await api.put(
        `/users/${id}
        `,
        data
      );
      if (response) {
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
            onPress: () => {
              setEditIsEnabled((previousState) => !previousState);
              handlePerfil();
            },
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
    setLanguage("english");
  }

  function selectPortuguese() {
    setPortugueseSelected(true);
    setEnglishSelected(false);
    setLanguage("portuguese");
  }

  function handleOnChangeName(newName: string) {
    setName(newName);
  }

  function confirmEditing() {
    editPerfil(id);
    setEditIsEnabled((previousState) => !previousState);
  }

  function logOut() {
    Alert.alert(
      "Warning",
      "Do you really want to leave?",
      [
        {
          text: "Yes",
          onPress: () => setIsAuthenticated(false),
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
