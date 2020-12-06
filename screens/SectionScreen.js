import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SectionScreen(props) {
  const { section } = props.route.params;
  console.log({ section });
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.caption}>{section.caption}</Text>
      </View>
    </View>
  );
}

export default SectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    height: 375
  }
});
