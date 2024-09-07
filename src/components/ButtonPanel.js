import { Text, View, StyleSheet, Pressable } from "react-native";
import { setNum, calculate, calculatePercent } from "./Operations";

const ButtonPanel = ({ item, setItem, setResult }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          onPress={() => setItem("")}
          style={[styles.button, styles.doubleHorizontal]}
        >
          <Text style={styles.buttonText}>AC</Text>
        </Pressable>
        <Pressable
          onPress={() => calculatePercent(item, setResult)}
          style={styles.operatorButton}
        >
          <Text style={styles.buttonText}>%</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "/", setItem)}
          style={styles.operatorButton}
        >
          <Text style={styles.buttonText}>/</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          onPress={() => setNum(item, "7", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>7</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "8", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>8</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "9", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>9</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "x", setItem)}
          style={styles.operatorButton}
        >
          <Text style={styles.buttonText}>X</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          onPress={() => setNum(item, "4", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>4</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "5", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>5</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "6", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>6</Text>
        </Pressable>
        <Pressable style={styles.operatorButton}>
          <Text
            onPress={() => setNum(item, "-", setItem)}
            style={styles.buttonText}
          >
            -
          </Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}>
          <Text
            onPress={() => setNum(item, "1", setItem)}
            style={styles.buttonText}
          >
            1
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "2", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>2</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "3", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>3</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, "+", setItem)}
          style={styles.operatorButton}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable
          onPress={() => setNum(item, "0", setItem)}
          style={[styles.button, styles.doubleHorizontal]}
        >
          <Text style={styles.buttonText}>0</Text>
        </Pressable>
        <Pressable
          onPress={() => setNum(item, ".", setItem)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>.</Text>
        </Pressable>
        <Pressable
          onPress={() => calculate(item, setItem, setResult)}
          style={styles.operatorButton}
        >
          <Text style={styles.buttonText}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
    width: "90%",
  },

  button: {
    backgroundColor: "#333",
    flex: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },

  operatorButton: {
    backgroundColor: "#ff9500",
    flex: 1,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },

  doubleHorizontal: {
    flex: 2,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default ButtonPanel;
