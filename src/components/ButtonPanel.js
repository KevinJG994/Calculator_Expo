import { Text, View, StyleSheet, Pressable } from "react-native";

const ButtonPanel = ({ item, setItem }) => {

    function setNum(num) {
        if (item == "0")
            setItem(num);
        else
            setItem(item + num);
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable onPress={() => setItem('0')} style={[styles.button, styles.doubleHorizontal]}>
                    <Text style={styles.buttonText}>AC</Text>
                </Pressable>
                <Pressable onPress={() => setNum('%')} style={styles.operatorButton}>
                    <Text style={styles.buttonText}>%</Text>
                </Pressable>
                <Pressable onPress={() => setNum('/')} style={styles.operatorButton}>
                    <Text style={styles.buttonText}>/</Text>
                </Pressable>
            </View>

            <View style={styles.row}>
                <Pressable onPress={() => setNum('7')} style={styles.button}>
                    <Text style={styles.buttonText}>7</Text>
                </Pressable>
                <Pressable onPress={() => setNum('8')} style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                </Pressable>
                <Pressable onPress={() => setNum('9')} style={styles.button}>
                    <Text style={styles.buttonText}>9</Text>
                </Pressable>
                <Pressable onPress={() => setNum('x')} style={styles.operatorButton}>
                    <Text style={styles.buttonText}>X</Text>
                </Pressable>
            </View>

            <View style={styles.row}>
                <Pressable onPress={() => setNum('4')} style={styles.button}>
                    <Text style={styles.buttonText}>4</Text>
                </Pressable>
                <Pressable onPress={() => setNum('5')} style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                </Pressable>
                <Pressable onPress={() => setNum('6')} style={styles.button}>
                    <Text style={styles.buttonText}>6</Text>
                </Pressable>
                <Pressable style={styles.operatorButton}>
                    <Text onPress={() => setNum('-')} style={styles.buttonText}>-</Text>
                </Pressable>
            </View>

            <View style={styles.row}>
                <Pressable style={styles.button}>
                    <Text onPress={() => setNum('1')} style={styles.buttonText}>1</Text>
                </Pressable>
                <Pressable onPress={() => setNum('2')} style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                </Pressable>
                <Pressable onPress={() => setNum('3')} style={styles.button}>
                    <Text style={styles.buttonText}>3</Text>
                </Pressable>
                <Pressable onPress={() => setNum('+')} style={styles.operatorButton}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>

            <View style={styles.row}>
                <Pressable onPress={() => setNum('0')} style={[styles.button, styles.doubleHorizontal]}>
                    <Text style={styles.buttonText}>0</Text>
                </Pressable>
                <Pressable onPress={() => setNum('.')} style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                </Pressable>
                <Pressable style={styles.operatorButton}>
                    <Text style={styles.buttonText}>=</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25292e',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 5,
        width: '90%',
    },

    button: {
        backgroundColor: '#333',
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
    },

    operatorButton: {
        backgroundColor: '#ff9500',
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 5,
    },

    doubleHorizontal: {
        flex: 2,
    },

    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
});

export default ButtonPanel;
