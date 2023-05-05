import { useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Modal,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [reviews, setReviews] = useState([
		{
			title: "Zelda, Breath of Fresh Air",
			rating: 5,
			body: "lorem ipsum",
			key: "1",
		},
		{
			title: "Gotta Catch Them All (again)",
			rating: 4,
			body: "lorem ipsum",
			key: "2",
		},
		{
			title: 'Not So "Final" Fantasy',
			rating: 3,
			body: "lorem ipsum",
			key: "3",
		},
	]);

	const addReview = (review) => {
		review.key = Math.random().toString();
		setReviews((prev) => {
			return [...prev, review];
		});
		setModalOpen(false);
	};

	return (
		<View style={globalStyles.container}>
			<Modal visible={modalOpen} animationType="slide">
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							onPress={() => setModalOpen(false)}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</TouchableWithoutFeedback>
			</Modal>

			<MaterialIcons
				style={styles.modalToggle}
				name="add"
				size={24}
				onPress={() => setModalOpen(true)}
			/>

			<FlatList
				data={reviews}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("ReviewDetails", item)}
					>
						<Card>
							<Text style={globalStyles.titleText}>{item.title}</Text>
						</Card>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	modalToggle: {
		alignSelf: "center",
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#f2f2f2",
		padding: 10,
		borderRadius: 10,
	},
	modalClose: {
		marginTop: 20,
	},
	modalContent: {
		flex: 1,
	},
});
