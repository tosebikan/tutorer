import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import * as Icon from '@expo/vector-icons';

const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const CoursesStack = createStackNavigator();
function Courses() {
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen name="CoursesScreen" component={CoursesScreen} />
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
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: '#4775f2',
        inactiveTintColor: 'gray'
      }}
    >
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon.Ionicons
              name="ios-home"
              size={26}
              color={focused ? '#4775f2' : 'gray'}
            />
          )
        }}
      />
      <TabStack.Screen
        name="Courses"
        component={Courses}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon.Ionicons
              name="ios-albums"
              size={26}
              color={focused ? '#4775f2' : 'gray'}
            />
          )
        }}
      />
      <TabStack.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon.Ionicons
              name="ios-folder"
              size={20}
              color={focused ? '#4775f2' : 'gray'}
            />
          )
        }}
      />
    </TabStack.Navigator>
  );
}

export default TabNavigator;
