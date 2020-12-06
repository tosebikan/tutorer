import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.props
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setName: (name) =>
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const styles = StyleSheet.create({
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22
  }
});
