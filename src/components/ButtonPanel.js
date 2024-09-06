import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const ButtonPanel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.doubleHorizontal]}>
                    <Text style={styles.buttonText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={[styles.button, styles.doubleHorizontal]}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operatorButton}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
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
