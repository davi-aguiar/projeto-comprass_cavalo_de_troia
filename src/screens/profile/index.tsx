import React from "react";
import { View, Text, StyleSheet, Image, Switch } from "react-native";
import { ProfileText } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My profile</Text>
      <View>
        <Image
          style={styles.image}
          source={require("@screens/profile/image.png")}
        ></Image>
        {/* <ProfileText>Juliane Golçalves Freitas</ProfileText> */}
        <Text style={styles.profileName}>Juliane Golçalves Freitas</Text>
        <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
      </View>
      <View style={styles.profileOptions}>
        <Text style={styles.profileOptionsText}>Edit Informations</Text>
        <Switch></Switch>
      </View>
      <View style={styles.profileOptions}>
        <Text style={styles.profileOptionsText}>Language</Text>
      </View>
      <View style={styles.profileOptions}>
        <Text style={styles.profileOptionsText}>Log out</Text>
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
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
