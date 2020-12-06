import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProjectsScreen(props) {
  // const { title } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>Projects Screen</Text>
    </View>
  );
}

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
