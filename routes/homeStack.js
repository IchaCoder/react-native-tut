import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import MyDrawer from "./drawer";
import LogoTitle from "../shared/title";

const Stack = createStackNavigator();

function MyStack() {
	return (
		<Stack.Navigator>
			{/* <Stack.Group
			// screenOptions={{
			// 	headerStyle: { backgroundColor: "red" },
			// 	headerTintColor: "#444",
			// }}
			> */}
			<Stack.Screen
				name="MyDrawer"
				component={MyDrawer}
				options={{ headerShown: false }}
			/>
			{/* </Stack.Group> */}
			<Stack.Group
				screenOptions={{
					headerStyle: { backgroundColor: "#eee" },
					headerTintColor: "#444",
					headerTitleAlign: "center",
				}}
			>
				<Stack.Screen name="ReviewDetails" component={ReviewDetails} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

export default function NavStack() {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
