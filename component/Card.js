import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={props.image} style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.content}>
        <Image source={props.logo} style={styles.logo} />
        <View style={styles.wrapper}>
          <Text style={styles.caption}>{props.caption}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 315,
    height: 280,
    borderRadius: 14,
    marginLeft: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1.41,
    elevation: 1
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20
  },
  logo: {
    height: 44,
    width: 44
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    height: 80
  },
  wrapper: {
    marginLeft: 10
  },
  caption: {
    color: "#3c4560",
    fontSize: 20,
    fontWeight: "600"
  },
  subtitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15
  }
});
