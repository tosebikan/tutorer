import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SectionScreen(props) {
  const title = props.route.params.title;
  return (
    <View style={styles.container}>
      <Text>Section Screen {title}</Text>
    </View>
  );
}

export default SectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
