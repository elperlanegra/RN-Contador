import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0); // El useSate del contador

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador: {contador}</Text>

      {/* Botton que incrementa en 1 el contador */}
      <Fab 
        title="-1" 
        position="bl"
        onPress={() => setContador(contador - 1)} 
        />

      {/* Botton que decrementa en 1 el contador */}
      <Fab title="+1" onPress={() => setContador(contador + 1)} />

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
});
