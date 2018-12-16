import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginPage from './src/pages/LoginPage'


const AppNavigator = createStackNavigator({
    'Login':{
      screen: LoginPage,
        navigationOptions: {
        title: "Bem Vindo",
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#6ca2f7',
          borderBottomWidth: 1,
          borderBottomColor: '#c5c5c5',
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 25,
          // flexGrow permite que os items se distribuam proporcionalmente dentro da flex.
          // Padrão é 0 (sem flexGrow)
          flexGrow: 2,
          textAlign: 'center',
        }
      }
    }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;