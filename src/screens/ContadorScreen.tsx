import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
const [contador, setContador] = useState(10);

  return (
    <View style={styles.containers}>
      <Text
        style={styles.texto}>
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
  containers: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 100,
  },
});
