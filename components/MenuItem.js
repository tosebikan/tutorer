import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Icon from '@expo/vector-icons';

function MenuItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Icon.Ionicons name={props.icon} size={24} color="#546bfb" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  container: {},
  iconView: {},
  content: {},
  title: {},
  text: {}
});
