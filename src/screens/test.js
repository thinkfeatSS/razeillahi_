import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View style={styles.container} >
      <Text>Test</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green',
    }
})

export default Test