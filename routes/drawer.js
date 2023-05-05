// ! use "npx expo start --clear" to start your app
// if facing issues after adding drawer and its dependencies

import { createDrawerNavigator } from "@react-navigation/drawer";
import LogoTitle from "../shared/title";
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
				headerTitleStyle: {
					fontWeight: "bold",
				},
				headerTitleAlign: "center",
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{ headerTitle: (props) => <LogoTitle title="Gamezone" /> }}
			/>
			<Drawer.Screen
				options={{
					headerTitle: (props) => <LogoTitle title="About Gamezone" />,
				}}
				name="About Gamezone"
				component={About}
			/>
		</Drawer.Navigator>
	);
}

export default MyDrawer;
