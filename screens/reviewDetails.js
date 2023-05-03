import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function ReviewDetails() {
	return (
		<View style={styles.container}>
			<Text>Review Details Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
});
