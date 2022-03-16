import React from "react";
import Routes from "./src/routes";
import PreLoader from "./src/Pages/PreLoader";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Rajdhani_300Light,
  Rajdhani_400Regular,
  Rajdhani_500Medium,
  Rajdhani_600SemiBold,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  console.disableYellowBox = true;
  let [fontsLoaded] = useFonts({
    Rajdhani_300Light,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <PreLoader />;
  } else {
    return <Routes />;
  }
}
