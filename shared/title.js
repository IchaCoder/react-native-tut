import React from "react";
import { Image, Text, View, StyleSheet, ImageBackground } from "react-native";

function LogoTitle({ title }) {
	return (
		<ImageBackground
			source={require("../assets/game_bg.png")}
			style={styles.container}
		>
			<Text style={styles.title}>{title}</Text>
			<Image
				style={styles.headerImage}
				source={require("../assets/heart_logo.png")}
			/>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	container: {
		flexDirection: "row-reverse",
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
});

export default LogoTitle;
