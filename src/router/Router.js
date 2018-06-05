import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
//
import ExploreScreen from "../containers/explore/ExploreScreen";
import MapScreen from "../containers/map/MapScreen";
import ProfileScreen from "../containers/profile/ProfileScreen";
import ShoppingListScreen from "../containers/shoppinglist/ShoppingListScreen";
import FavoritesScreen from "../containers/favorites/FavoritesScreen";
//
import { brandingColors } from "../assets/branding";
export const Router = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen
    },
    Map: {
      screen: MapScreen
    },
    Favorites: {
      screen: FavoritesScreen
    },
    ShoppingList: {
      screen: ShoppingListScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: "Explore",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: brandingColors.primary,
      inactiveTintColor: "grey"
    },
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: (navigation => {
        const { routeName } = navigation.state;
        return routeName === "ShoppingList" ? "Shopping List" : routeName;
      })(navigation),
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Explore") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Map") {
          iconName = `ios-map${focused ? "" : "-outline"}`;
        } else if (routeName === "Favorites") {
          iconName = `ios-star${focused ? "" : "-outline"}`;
        } else if (routeName === "ShoppingList") {
          iconName = `ios-list-box${focused ? "" : "-outline"}`;
        } else if (routeName === "Profile") {
          iconName = `ios-person${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    })
  }
);
