import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 24,
	},
});
