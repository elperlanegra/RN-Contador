import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0); // El useSate del contador

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>

      {/* Botton que incrementa en 1 el contador */}
      <TouchableOpacity
        style={styles.fabLocationsBR} // Esto es para crear los botones
        onPress={() => setContador(contador + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      {/* Botton que decrementa en 1 el contador */}
      <TouchableOpacity
        style={styles.fabLocationsBL} // Esto es para crear los botones
        onPress={() => setContador(contador - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
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
    padding: 10,
  },

  fabLocationsBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },

  fabLocationsBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },

  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
