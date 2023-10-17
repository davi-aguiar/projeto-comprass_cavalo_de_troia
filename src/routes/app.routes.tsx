import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homesvg from "@assets/icons/home.svg";
import ShopSvg from "@assets/icons/cart-shop.svg";
import Profilesvg from "@assets/icons/profile.svg";
import FavoritesSvg from "@assets/icons/favorites.svg";
import ProfileSvg from "@assets/icons/profile.svg";
import { PayRoutes } from "./pay.routes";

import { Profile } from "@screens/Profile";
import MainPage from "@screens/MainPage";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const iconSize = 30;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.RED_200,
        tabBarInactiveTintColor: COLORS.GRAY_500,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          height: "auto",
          paddingTop: 24,
          paddingBottom: 5,
          position: "absolute",
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.REGULAR,
          fontSize: FONT_SIZE.XS,
          lineHeight: 30,
          marginTop: 8,
          textTransform: "capitalize",
        },
      }}
    >
      <Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Homesvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Profilesvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={PayRoutes}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Profilesvg
              color={color}
              fill={focused ? COLORS.RED_200 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          ),
        }}
      />
    </Navigator>
  );
}
