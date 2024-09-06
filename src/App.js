import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ButtonPanel from './components/ButtonPanel';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonPanel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
