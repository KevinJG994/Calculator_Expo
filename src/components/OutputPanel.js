import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OutputPanel = ({item}) => {
    return (
        <View style={styles.container}>
            //TODO - outputText debe mostrar el resultado
            <Text style={styles.outputText}>{item}</Text>
            <Text style={styles.inputText}>{item}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
        backgroundColor: '#444',
    },
    outputText: {
        color: '#ff9500',
        fontSize: 40,
        position: 'absolute',
        top: 50,
        right: 40,
    },
    inputText: {
        color: '#fff',
        fontSize: 40,
        position: 'absolute',
        bottom: 20,
        right: 40,
    },
});

export default OutputPanel;
