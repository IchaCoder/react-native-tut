import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import Navigation from "./routes/homeStack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function App() {
	const [fontsLoaded] = useFonts({
		"nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
		"nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	} else {
		SplashScreen.hideAsync();
	}

	return <Navigation />;
}
