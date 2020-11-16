import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

function Logo(props) {
  return (
    <View style={styles.container}>
      <Image source={props.logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
    elevation: 1,
    marginLeft: 8,
    marginRight: 8
  },
  logo: {
    width: 36,
    height: 36
  },
  text: {
    fontWeight: "600",
    fontSize: 17,
    marginLeft: 8
  }
});
