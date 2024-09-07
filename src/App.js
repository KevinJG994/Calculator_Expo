import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ButtonPanel from "./components/ButtonPanel";
import OutputPanel from "./components/OutputPanel";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <OutputPanel item={item} result={result} />
        <ButtonPanel item={item} setItem={setItem} setResult={setResult} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#ff9500",
    justifyContent: "center",
    alignItems: "center",
  },

  calculatorContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#444",
  },
});
