import React from "react";

import Reading from "./src/pages/Reading";

import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import {
  useFonts,
  Yrsa_300Light,
  Yrsa_400Regular,
  Yrsa_500Medium,
  Yrsa_600SemiBold,
  Yrsa_700Bold,
} from "@expo-google-fonts/yrsa";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
//============================================================================
export default function App() {
  let [fontsLoaded] = useFonts({
    Yrsa_300Light,
    Yrsa_400Regular,
    Yrsa_500Medium,
    Yrsa_600SemiBold,
    Yrsa_700Bold,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Reading />
    </View>
  );
}
//----------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
