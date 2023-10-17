import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "@components/Loading";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_500 }}>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        <AppRoutes /> : <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
