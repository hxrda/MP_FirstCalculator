import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default function App() {
	//States:
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [result, setResult] = useState();

	//Functions:

	const addNumbers = () => {
		const resultValue = parseFloat(firstNumber) + parseFloat(secondNumber);
		setResult(resultValue);
	};

	const subtractNumbers = () => {
		const resultValue = parseFloat(firstNumber) - parseFloat(secondNumber);
		setResult(resultValue);
	};

	//Rendering:
	return (
		<View style={styles.container}>
			<Text>Result: {result}</Text>
			<View>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(firstValue) => setFirstNumber(firstValue)}
				/>
				<TextInput
					style={styles.textInputContainer}
					inputMode="numeric"
					onChangeText={(secondValue) => setSecondNumber(secondValue)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button title="+" onPress={addNumbers} />
				<View style={{ width: 20 }} />
				<Button title="-" onPress={subtractNumbers} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	textInputContainer: {
		width: 200,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		flexDirection: "row",
	},
});
