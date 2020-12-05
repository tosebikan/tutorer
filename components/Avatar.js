import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';

function Avatar() {
  const [photo, setPhoto] = useState(
    'https://health.utah.edu/themes/custom/theme_uou/img/placeholder-user.png'
  );

  return <Image source={{ uri: photo }} style={styles.avatar} />;
}

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginLeft: 20
  }
});
