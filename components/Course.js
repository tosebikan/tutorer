import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Course(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image source={props.image} style={styles.image} resizeMode="cover" />
        <Image source={props.logo} style={styles.logo} />
        <Text style={styles.subtitle}> {props.subtitle} </Text>
        <Text style={styles.title}> {props.title} </Text>
      </View>
      <View style={styles.content}>
        <Image source={props.avatar} style={styles.avatar} />
        <Text style={styles.caption}>{props.caption}</Text>
        <Text style={styles.author}> Taught by {props.author}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 335,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
    elevation: 1
  },
  cover: {
    height: 260,
    justifyContent: 'flex-end'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  logo: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 90,
    left: '50%',
    marginLeft: -24
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
    marginBottom: 20,
    marginLeft: 20,
    width: 170,
    textAlign: 'left'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'rgba(255,255,255, 0.8)',
    textTransform: 'uppercase',
    marginLeft: 20
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    left: 20,
    top: 20
  },
  content: {
    paddingLeft: 62,
    height: 75,
    justifyContent: 'center'
  },
  caption: {
    fontSize: 14,
    color: '#3c4560',
    fontWeight: '500'
  },
  author: {
    fontSize: 13,
    color: '#b8bec3',
    fontWeight: '500',
    marginTop: 4
  }
});
