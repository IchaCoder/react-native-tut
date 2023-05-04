// ! use "npx expo start --clear" to start your app
// if facing issues after adding drawer and its dependencies

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";
import Home from "../screens/home";

const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
		<Drawer.Navigator
			useLegacyImplementation
			screenOptions={{
				headerStyle: { backgroundColor: "#eee" },
				headerTintColor: "#444",
			}}
		>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="About Gamezone" component={About} />
		</Drawer.Navigator>
	);
}

export default MyDrawer;
