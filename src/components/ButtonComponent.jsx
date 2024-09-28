import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import {globalStyles} from '../styles/styles'; // Import styles


const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={globalStyles.button} onPress={onPress}>
    <Text style={globalStyles.buttonText}>{title}</Text>
  </TouchableOpacity>
  )
}

export default ButtonComponent