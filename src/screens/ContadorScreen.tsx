import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Contador: {contador}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setContador(contador + 1)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 100
  }, 
});
