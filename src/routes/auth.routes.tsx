import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import { Login } from "@screens/Login";
import { SignUp } from "@screens/SignUp";

type RoutesAuthentication = {
  Login: undefined;
  SignUp: undefined;
};

export type AuthProps = NativeStackNavigationProp<RoutesAuthentication>;

const { Navigator, Screen } =
  createNativeStackNavigator<RoutesAuthentication>();

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
}
