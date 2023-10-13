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
import { Login } from "@screens/Login";
import { AuthRoutes } from "@routes/auth.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <AuthRoutes /> : null}

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
