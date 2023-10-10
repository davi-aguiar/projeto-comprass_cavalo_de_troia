import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold
} from "@expo-google-fonts/open-sans";
import { SignUp } from "@screens/SignUp";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <SignUp /> : null}

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
