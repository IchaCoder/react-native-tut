import { StatusBar } from "expo-status-bar";
import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	Keyboard,
} from "react-native";
import { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "create an app", key: "2" },
		{ text: "play on the switch", key: "3" },
	]);

	const handlePress = (id) => {
		setTodos((prev) => {
			return prev.filter((item) => item.key !== id);
		});
	};

	const submitHandler = (text) => {
		if (text.length > 3) {
			setTodos((prev) => {
				return [...prev, { text, key: Math.random().toString() }];
			});
		} else {
			Alert.alert("OOPS!", "Todos must be over 3 chars long", [
				{ text: "Understood", onPress: () => console.log("alert close") },
			]);
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo submitHandler={submitHandler} />
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem handlePress={handlePress} item={item} />
							)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
		backgroundColor: "pink",
		flex: 1,
	},
	list: {
		marginTop: 20,
		backgroundColor: "yellow",
		flex: 1,
	},
});
