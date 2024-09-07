import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OutputPanel = ({ item, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.outputText}>{result !== null ? result : ""}</Text>
      <Text style={styles.inputText}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  outputText: {
    color: "#ff9500",
    fontSize: 40,
    width: "90%",
    textAlign: "right",
    marginTop: 80,
    marginRight: 20,
  },
  
  inputText: {
    color: "#fff",
    fontSize: 40,
    width: "90%",
    textAlign: "right",
    position: "absolute",
    bottom: 50,
    marginRight: 20,
  },
});

export default OutputPanel;
