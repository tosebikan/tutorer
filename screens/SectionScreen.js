import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import * as Icon from '@expo/vector-icons';

function SectionScreen(props) {
  const { section } = props.route.params;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.cover}>
        <Image style={styles.image} source={section.image} />
        <Text style={styles.title}>{section.title}</Text>
        <Text style={styles.caption}>{section.caption}</Text>
      </View>
      <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
        <View style={styles.closeView}>
          <Icon.Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -2 }}
          />
        </View>
      </TouchableOpacity>
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
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    width: 170,
    position: 'absolute',
    top: 78,
    left: 20
  },
  caption: {
    fontSize: 17,
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 300
  },
  closeView: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1
  }
});
