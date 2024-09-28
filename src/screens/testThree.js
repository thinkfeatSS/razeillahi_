import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const testThree = () => {
  return (
    <View style={styles.container} >
      <Text>testThree</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    }
})

export default testThree