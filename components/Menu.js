import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

function Menu() {
  // const top = useRef(new Animated.Value(0)).current;
  const [top, setTop] = useState(new Animated.Value(900));

  useEffect(() => {
    spring();
  }, []);

  const spring = () => {
    Animated.spring(top, {
      toValue: 0,
      duration: 10000,
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
                inputRange: [0, 900],
                outputRange: [-600, 0]
              })
            }
          ]
        }
      ]}
    >
      <View style={styles.cover} />
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
  content: {
    height: 900,
    backgroundColor: '#f0f3f5'
  }
});
