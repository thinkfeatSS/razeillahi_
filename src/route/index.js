import React, {useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routelist';

const Stack = createStackNavigator();

const ScreensRoute = () => (
  <Stack.Navigator initialRouteName='home' >
    {Routes.map((item, index) => {
      return (
        <Stack.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{headerShown: false}}
        />
      );
    })}
  </Stack.Navigator>
);

const AppNavigatior = () => {

  return (
    <NavigationContainer>
        <ScreensRoute/>
    </NavigationContainer>
  );
};

export default AppNavigatior;