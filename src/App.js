import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ButtonPanel from './components/ButtonPanel';
import OutputPanel from './components/OutputPanel';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <OutputPanel item={item} />
        <ButtonPanel item={item} setItem={setItem} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//TODO - OutputPanel, debe tener un límite en el margin left
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9500',
    justifyContent: 'center',
    alignItems: 'center',
  },

  calculatorContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // maxWidth: '375px',
    // maxHeight: '667px',
    backgroundColor: '#444',
  },
});