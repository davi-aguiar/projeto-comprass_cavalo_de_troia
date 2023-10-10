import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { ProfileText } from "./styles";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.titleConteiner}>
        <Text style={styles.title}>My profile</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("@screens/profile/image.png")}
        ></Image>
      </View>
      <View>
        {/* <ProfileText>Juliane Golçalves Freitas</ProfileText> */}
        <Text style={styles.profileName}>Juliane Golçalves Freitas</Text>
        <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
      </View>
      <View style={styles.conteinerOptions}>
        <View style={styles.profileOptions}>
          <Text style={styles.profileOptionsText}>Edit Informations</Text>
          <Switch></Switch>
        </View>
        <TouchableOpacity>
          <View style={styles.profileOptions}>
            <Text style={styles.profileOptionsText}>Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.profileOptions}>
            <Text style={styles.profileOptionsText}>Log out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    borderBottomColor: "black",
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
});
