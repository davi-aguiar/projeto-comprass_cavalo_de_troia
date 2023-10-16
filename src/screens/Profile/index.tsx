import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
  Dimensions
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  CenteredView,
  ConfirmButton,
  Container,
  ConteinerConfirmButton,
  ConteinerOptions,
  EditButton,
  Image,
  ModalButtonsSelected,
  ModalButtonsUnselected,
  ModalOptions,
  ModalTitle,
  ProfileEmail,
  ProfileName,
  ProfileOptions,
  ProfileOptionsText,
  StyledText,
  Title,
  TitleConteiner
} from "./styles";
import useStoreData from "../../context";

export function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState("Juliane Golçalves Freitas");
  const [modalVisible, setModalVisible] = useState(false);
  const [englishSelected, setEglishSelected] = useState(false);
  const [portugueseSelected, setPortugueseSelected] = useState(false);

  const englishTextColor = englishSelected ? "blue" : "yellow";
  const portguesTextColor = portugueseSelected ? "#040404" : " #470000";

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function selectEnglish() {
    setEglishSelected(true);
    setPortugueseSelected(false);
  }

  function selectPortuguese() {
    setPortugueseSelected(true);
    setEglishSelected(false);
  }

  function handleOnChangeName(newName: string) {
    setName(newName);
  }

  function confirmEditing() {
    toggleSwitch();
    console.log("editou");
  }

  function logOut() {
    console.log("deslogou");
  }
  const store = useStoreData();

  return (
    <Container>
      <ConteinerConfirmButton>
        {isEnabled && (
          <ConfirmButton onPress={confirmEditing}>
            <AntDesign name="check" size={24} color="white" />
          </ConfirmButton>
        )}
      </ConteinerConfirmButton>
      <TitleConteiner>
        <Title>My profile</Title>
      </TitleConteiner>
      <View>
        <Image source={require("@screens/profile/image.png")} />
        {isEnabled && (
          <EditButton>
            <MaterialIcons name="mode-edit" size={24} color="white" />
          </EditButton>
        )}
      </View>
      <View>
        {isEnabled ? (
          <ProfileName
            value={name}
            onChangeText={handleOnChangeName}
          ></ProfileName>
        ) : (
          <ProfileName>{store.name}</ProfileName>
        )}
        <ProfileEmail>{store.email}</ProfileEmail>
      </View>

      <ConteinerOptions>
        <ProfileOptions>
          <ProfileOptionsText>Edit Informations</ProfileOptionsText>
          <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
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
            <TouchableOpacity onPress={selectEnglish}>
              <StyledText color={englishTextColor}>English</StyledText>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectPortuguese}>
              <Text color={portguesTextColor}>Portugues - Brazil</Text>
            </TouchableOpacity>
          </ModalOptions>
        </CenteredView>
      </Modal>
    </Container>
  );
}
