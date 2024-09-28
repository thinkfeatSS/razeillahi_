/**
 * @format
 */
import React, {useState} from 'react';

import {AppRegistry} from 'react-native';
import App from './app original';
import {name as appName} from './app.json';
import {ThemeProvider} from './src/context/ThemeContext';
export default function Main() {
  return (
  
    <ThemeProvider>
    <App />
  </ThemeProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
