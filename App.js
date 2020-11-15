import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView
} from "react-native";
import Card from "./component/Card";
import * as Icon from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.titleBar}>
          <Image
            source={require("./assets/avatar.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.title}>Welcome,</Text>
          <Text style={styles.name}>Tolu</Text>
          <Icon.Ionicons name="ios-notifications" />
        </View>
        <Text style={styles.subtitle}>Continue Learning</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card
            title="Styled Component"
            image={require("./assets/background2.jpg")}
            logo={require("./assets/logo-react.png")}
            caption="React Native"
            subtitle="5 of 12 sections"
          />
          <Card
            title="Styled Component"
            image={require("./assets/background2.jpg")}
            logo={require("./assets/logo-react.png")}
            caption="React Native"
            subtitle="5 of 12 sections"
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f3f5"
  },
  titleBar: {
    width: "100%",
    marginTop: 50,
    paddingLeft: 20,
    paddingLeft: 80
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    position: "absolute",
    marginLeft: 20
  },
  title: {
    fontSize: 16,
    color: "#b8bece",
    fontWeight: "500"
  },
  name: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 50
  }
});
