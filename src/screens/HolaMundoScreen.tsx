import React from 'react'
import {Text, View} from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View style={{ 
      flex: 1,
      justifyContent: 'center'
     }}>
      <Text style={{ 
        fontSize: 35,
        textAlign: 'center'
      }}>Hola Mundo desde la screen </Text>
    </View>
  )
}




