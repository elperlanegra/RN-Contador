import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {

  const [contador, setContador] = useState(0); // El useSate del contador

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>

      <TouchableOpacity // Esto es para crear los botones
        style={styles.button}
        onPress={() => setContador(contador + 1)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

// Con StyleSheet podemos crear los estilos de los componentes y poder reutilizarlos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 35,
    top: -15,
    padding: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 100,
  },
});
