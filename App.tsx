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
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "@routes/auth.routes";
import { Profile } from "@screens/Profile";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold
  });

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <AuthRoutes /> : <Loading />}

        <StatusBar style="auto" />
      </ThemeProvider>
    </NavigationContainer>
  );
}
