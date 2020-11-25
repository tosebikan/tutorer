import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import * as Icon from '@expo/vector-icons';

function Menu() {
  // const top = useRef(new Animated.Value(0)).current;
  const [top, setTop] = useState(new Animated.Value(900));

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
      toValue: 900,
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
                inputRange: [-900, 0],
                outputRange: [1200, 0]
              })
            }
          ]
        }
      ]}
    >
      <View style={styles.cover} />
      <TouchableOpacity onPress={close}>
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
    backgroundColor: '#000'
  },
  close: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    height: 900,
    backgroundColor: '#f0f3f5'
  }
});
