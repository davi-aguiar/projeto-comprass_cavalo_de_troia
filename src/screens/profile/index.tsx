import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

var width = Dimensions.get("window").width;

export function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState("Juliane Golçalves Freitas");
  const [modalVisible, setModalVisible] = useState(false);
  const [englishSelected, setEglishSelected] = useState(false);
  const [portugueseSelected, setPortugueseSelected] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function selectEnglish() {
    setEglishSelected(true);
    setPortugueseSelected(false);
  }
  function selectPortuguese() {
    setPortugueseSelected(true);
    setEglishSelected(false);
  }
  function handleOnChangeName(name: string) {
    setName(name);
  }
  function confirmEditing() {
    toggleSwitch();
    console.log("editou");
  }
  function logOut() {
    console.log("deslogou");
  }

  return (
    <View style={styles.container}>
      <View style={styles.conteinerConfirmButton}>
        {isEnabled && (
          <TouchableOpacity
            onPress={confirmEditing}
            style={styles.confirmButton}
          >
            <AntDesign name="check" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleConteiner}>
        <Text style={styles.title}>My profile</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("@screens/profile/image.png")}
        ></Image>
        {isEnabled && (
          <TouchableOpacity style={styles.editButton}>
            <MaterialIcons name="mode-edit" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        {isEnabled ? (
          <TextInput
            value={name}
            onChangeText={handleOnChangeName}
            style={styles.profileName}
          ></TextInput>
        ) : (
          <Text style={styles.profileName}>{name}</Text>
        )}

        <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
      </View>
      <View style={styles.conteinerOptions}>
        <View style={styles.profileOptions}>
          <Text style={styles.profileOptionsText}>Edit Informations</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled}></Switch>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.profileOptions}>
            <Text style={styles.profileOptionsText}>Language</Text>
            <AntDesign name="down" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={logOut}>
          <View style={styles.profileOptions}>
            <Text style={styles.profileOptionsText}>Log out</Text>
            <AntDesign name="logout" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalOptions}>
            <Text style={styles.modalTitle}>Languages</Text>
            <TouchableOpacity
              style={
                englishSelected
                  ? styles.modalButtonsSelected
                  : styles.modalButtonsUnselected
              }
              onPress={selectEnglish}
            >
              <Text
                style={
                  englishSelected ? { color: "white" } : { color: "black" }
                }
              >
                English
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                portugueseSelected
                  ? styles.modalButtonsSelected
                  : styles.modalButtonsUnselected
              }
              onPress={selectPortuguese}
            >
              <Text
                style={
                  portugueseSelected ? { color: "white" } : { color: "black" }
                }
              >
                Portuguese - Brazil
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  title: {
    fontWeight: "800",
    fontSize: 32,
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  image: {
    borderRadius: 100,
    margin: 20,
  },
  profileName: {
    fontWeight: "600",
    fontSize: 24,
  },
  profileEmail: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9B9B9B",
  },
  profileOptionsText: {
    fontWeight: "700",
    fontSize: 16,
  },
  profileOptions: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    height: 73,
    padding: 20,
    margin: 1,
  },
  conteinerOptions: {
    width: width,
  },
  titleConteiner: {
    alignItems: "flex-start",
    width: width,
  },
  confirmButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2AA952",
    borderRadius: 100,
    height: 46,
    width: 46,
    margin: 20,
  },
  conteinerConfirmButton: {
    width: width,
    alignItems: "flex-end",
    height: 80,
  },
  editButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF0024",
    borderRadius: 100,
    height: 46,
    width: 46,
    margin: 20,
    position: "absolute",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalOptions: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: width,
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalTitle: {
    margin: 20,
    fontSize: 18,
    fontWeight: "700",
  },
  modalTextsSelected: {
    color: "white",
  },
  modalButtonsSelected: {
    justifyContent: "center",
    height: 50,
    backgroundColor: "#DB3022",
    width: width,
    paddingHorizontal: 20,
  },
  modalButtonsUnselected: {
    justifyContent: "center",
    height: 50,
    backgroundColor: "white",
    width: width,
    paddingHorizontal: 20,
  },
});
