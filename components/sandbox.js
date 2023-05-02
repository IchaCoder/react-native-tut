import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sandbox() {
	return (
		<View style={styles.container}>
			<Text style={styles.one}>One</Text>
			<Text style={styles.two}>Two</Text>
			<Text style={styles.three}>Three</Text>
			<Text style={styles.four}>Four</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		backgroundColor: "#ddd",
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	one: {
		backgroundColor: "violet",
		padding: 10,
	},
	two: {
		backgroundColor: "gold",
		padding: 10,
	},
	three: {
		backgroundColor: "coral",
		padding: 10,
	},
	four: {
		backgroundColor: "skyblue",
		padding: 10,
	},
});
