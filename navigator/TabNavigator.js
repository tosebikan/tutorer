import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SectionScreen" component={SectionScreen} />
    </HomeStack.Navigator>
  );
}

const CoursesStack = createStackNavigator();
function Courses() {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen name="CoursesScreen" component={SectionScreen} />
    </CoursesStack.Navigator>
  );
}

const ProjectsStack = createStackNavigator();
function Projects() {
  return (
    <ProjectsStack.Navigator>
      <ProjectsStack.Screen name="ProjectScreen" component={SectionScreen} />
    </ProjectsStack.Navigator>
  );
}

const TabStack = createBottomTabNavigator();
function TabNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Courses" component={Courses} />
      <TabStack.Screen name="Projects" component={Projects} />
    </TabStack.Navigator>
  );
}

export default TabNavigator;
