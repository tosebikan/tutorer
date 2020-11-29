import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView
} from 'react-native';
import Card from '../components/Card';
// import * as Icon from '@expo/vector-icons';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <StatusBar style="auto" />
          <View style={styles.titleBar}>
            <Image
              source={require('./assets/avatar.jpg')}
              style={styles.avatar}
            />
            <Text style={styles.title}>Welcome,</Text>
            <Text style={styles.name}>Tolu</Text>
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
              />
            ))}
          </ScrollView>
          <Text style={styles.subtitle}>Popular courses</Text>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5'
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    position: 'absolute',
    marginLeft: 20
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
    image: require('./assets/logo-framerx.png'),
    text: 'Framer X'
  },
  {
    image: require('./assets/logo-figma.png'),
    text: 'Figma'
  },
  {
    image: require('./assets/logo-react.png'),
    text: 'React'
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: 'Sketch'
  },
  {
    image: require('./assets/logo-swift.png'),
    text: 'Swift'
  },
  {
    image: require('./assets/logo-xcode.png'),
    text: 'xcode'
  }
];

const cards = [
  {
    title: 'Styled Component',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    caption: 'React Native',
    subtitle: '5 of 12 sections'
  },
  {
    title: 'Props & State',
    image: require('./assets/background12.jpg'),
    logo: require('./assets/logo-react.png'),
    caption: 'React',
    subtitle: '2 of 12 sections'
  },
  {
    title: 'Static Data & Components',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-framerx.png'),
    caption: 'Flutter',
    subtitle: '3 of 12 sections'
  },
  {
    title: 'Redux',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-xcode.png'),
    caption: 'Swift',
    subtitle: '4 of 12 sections'
  }
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('./assets/background13.jpg'),
    logo: require('./assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('./assets/background11.jpg'),
    logo: require('./assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('./assets/background14.jpg'),
    logo: require('./assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('./assets/background6.jpg'),
    logo: require('./assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('./assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool'
  }
];
