import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function SectionScreen(props) {
  const title = props.route.params.title;
  return (
    <View style={styles.container}>
      <Text>Section Screen {title}</Text>
      <Button title="close" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

export default SectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
