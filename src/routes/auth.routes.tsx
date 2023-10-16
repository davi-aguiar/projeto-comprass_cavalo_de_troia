import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";
import { ForgotPassword } from "@screens/ForgotPassword";

import { Login } from "@screens/Login";
import { Profile } from "@screens/Profile";
import { SignUp } from "@screens/SignUp";

type RoutesAuthentication = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Profile: undefined;
};

export type AuthProps = NativeStackNavigationProp<RoutesAuthentication>;

const { Navigator, Screen } =
  createNativeStackNavigator<RoutesAuthentication>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Login" component={Login} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
