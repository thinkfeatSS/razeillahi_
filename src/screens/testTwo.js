import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const testTwo = () => {
  return (
    <View style={styles.container} >
      <Text>testTwo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
    }
})

export default testTwo