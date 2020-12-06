import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import Card from '../components/Card';
// import * as Icon from '@expo/vector-icons';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import Avatar from '../components/Avatar';

function mapStateToProps(state) {
  return {
    action: state.action,
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: 'OPEN_MENU'
      })
  };
}

function HomeScreen(props) {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const [status, setStatus] = useState('dark-content');

  useEffect(() => {
    toggleMenu();
  });

  const toggleMenu = () => {
    if (props.action === 'openMenu') {
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true
      }).start();

      Animated.timing(opacity, {
        toValue: 0.5,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true
      }).start();

      setStatus('light');
    }

    if (props.action === 'closeMenu') {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: true
      }).start();

      setStatus('dark');
    }

    // StatusBar.setStatusBarStyle('dark');
  };
  return (
    <View style={styles.rootView}>
      <Menu />
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                scale: scale
              }
            ],
            opacity: opacity
          }
        ]}
      >
        <SafeAreaView>
          <ScrollView>
            <StatusBar style={status} />
            <View style={styles.titleBar}>
              <TouchableOpacity
                style={styles.avatarContainer}
                onPress={props.openMenu}
              >
                <Avatar />
              </TouchableOpacity>
              <Text style={styles.title}>Welcome,</Text>
              <Text style={styles.name}>{props.name}</Text>
              <NotificationIcon
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </View>
            <ScrollView
              style={{
                paddingHorizontal: 20,
                paddingVertical: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo text={logo.text} logo={logo.image} key={index} />
              ))}
            </ScrollView>
            <Text style={styles.subtitle}>Continue Learning</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  caption={card.caption}
                  subtitle={card.subtitle}
                  onPress={() =>
                    props.navigation.navigate('SectionScreen', {
                      section: card
                    })
                  }
                />
              ))}
            </ScrollView>
            <Text style={styles.subtitle}>Popular courses</Text>
            <View style={{ alignItems: 'center' }}>
              {courses.map((course, id) => (
                <Course
                  key={id}
                  image={course.image}
                  logo={course.logo}
                  subtitle={course.subtitle}
                  title={course.title}
                  avatar={course.avatar}
                  caption={course.caption}
                  name={course.name}
                  author={course.author}
                />
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden'
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80
  },
  avatar: {
    marginLeft: 20
  },
  avatarContainer: {
    position: 'absolute',
    left: 20
  },
  title: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: '500'
  },
  name: {
    fontSize: 20,
    color: '#3c4560',
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#b8bece',
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
    textTransform: 'uppercase'
  }
});

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch'
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('../assets/logo-xcode.png'),
    text: 'xcode'
  }
];

const cards = [
  {
    title: 'Styled Component',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    caption: 'React Native',
    subtitle: '5 of 12 sections'
  },
  {
    title: 'Props & State',
    image: require('../assets/background12.jpg'),
    logo: require('../assets/logo-react.png'),
    caption: 'React',
    subtitle: '2 of 12 sections'
  },
  {
    title: 'Static Data & Components',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-framerx.png'),
    caption: 'Flutter',
    subtitle: '3 of 12 sections'
  },
  {
    title: 'Redux',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-xcode.png'),
    caption: 'Swift',
    subtitle: '4 of 12 sections'
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
