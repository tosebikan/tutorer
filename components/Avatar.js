import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

function Avatar() {
  const [photo, setPhoto] = useState(
    'https://health.utah.edu/themes/custom/theme_uou/img/placeholder-user.png'
  );

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((res) => {
        let profilePic = res.results[0].picture.thumbnail;
        setPhoto(profilePic);
      });
  }, []);

  return <Image source={{ uri: photo }} style={styles.avatar} />;
}

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22
  }
});
