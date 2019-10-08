//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createBottomTabNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';

//
import AboutScreen from './pages/AboutScreen';
import ContactScreen from './pages/ContactScreen';

import ImageScreen from './pages/ImageScreen';
import VideoScreen from './pages/VideoScreen';
import PlaylistScreen from './pages/PlaylistScreen';

const HomeStack = createStackNavigator(
  {
    //Definition of Navigaton from home screen
    Home: { screen: HomeScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#FDD836',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    //Definition of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#FDD836',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);

//
const AboutStack = createStackNavigator(
  {
    //Definition of Navigaton from about screen
    About: { screen: AboutScreen },
    Contact: { screen: ContactScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#FDD836',
      },
      headerTintColor: '#FFFFFF',
      title: 'About',
      //Header title
    },
  }
);

const ImageStack = createStackNavigator(
  {
    //Definition of Navigaton from about screen
    Images: { screen: ImageScreen },
    Video: { screen: VideoScreen },
    Playlist: { screen: PlaylistScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#FDD836',
      },
      headerTintColor: '#FFFFFF',
      title: 'All media',
      //Header title
    },
  }
);


const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
    About: { screen: AboutStack },
    Images: { screen: ImageStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-help-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Images') {
          iconName = `ios-close-circle${focused ? '' : '-outline'}`; 
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    resetOnBlur: true,// resets tab nav switch
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  }//https://reactnavigation.org/docs/en/bottom-tab-navigator.html
);
export default createAppContainer(App);