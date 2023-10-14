import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold
} from "@expo-google-fonts/open-sans";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { CepScreen } from "@screens/CepScreen";
import { Routes } from "@routes/index";
export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return (
    <ThemeProvider theme={theme}>
         <Routes />
<StatusBar style="auto" />
    </ThemeProvider>
  );
}
