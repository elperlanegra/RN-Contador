import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


interface Props {
    title: string
}

export const Fab = ( props: Props ) => {

    return (
        <TouchableOpacity
            style={styles.fabLocationsBR} // Esto es para crear los botones
            onPress={() => console.log(props.title)}>
            <View style={styles.fab}>
                <Text style={styles.fabText}> +1 </Text>
            </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})