import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  Image,
  Text
} from 'react-native';
import * as Icon from '@expo/vector-icons';
import MenuItem from './MenuItem';

const screenHeight = Dimensions.get('window').height;
function Menu() {
  const [top] = useState(new Animated.Value(screenHeight));

  useEffect(() => {
    spring();
  }, []);

  const spring = () => {
    Animated.spring(top, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  };

  const close = () => {
    Animated.spring(top, {
      toValue: screenHeight,
      useNativeDriver: true
    }).start();
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: top.interpolate({
                inputRange: [-screenHeight, 0],
                outputRange: [screenHeight * 1.2, 0]
              })
            }
          ]
        }
      ]}
    >
      <View style={styles.cover}>
        <Image
          source={require('../assets/background2.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Tolu Ola</Text>
        <Text style={styles.subtitle}>Fullstack Developer</Text>
      </View>
      <TouchableOpacity
        onPress={close}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 110
        }}
      >
        <View style={styles.close}>
          <Icon.Ionicons name="ios-close" size={44} color="tomato" />
        </View>
      </TouchableOpacity>
      <View style={styles.content} />
    </Animated.View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    zIndex: 100
  },
  cover: {
    height: 142,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  close: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5
  },
  content: {
    height: screenHeight,
    backgroundColor: '#f0f3f5'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255, 0.5)',
    marginTop: 8
  }
});
