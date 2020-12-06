import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function CoursesScreen(props) {
  // const { title } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>Courses Screen</Text>
      <Button title="close" onPress={() => props.navigation.goBack()} />
    </View>
  );
}

export default CoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
