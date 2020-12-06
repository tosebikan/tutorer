import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: 'UPDATE_NAME',
        payload: name
      })
  };
}

function Avatar(props) {
  const [photo, setPhoto] = useState(
    'https://health.utah.edu/themes/custom/theme_uou/img/placeholder-user.png'
  );

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((res) => {
        let profilePic = res.results[0].picture.thumbnail;
        setPhoto(profilePic);

        let name = res.results[0].name.first;
        props.updateName(name);
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
