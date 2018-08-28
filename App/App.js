import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import SignUpActivity from "./Activities/SignUpActivity";
import LoginActivity from "./Activities/LoginActivity";
import LoadingActivity from "./Activities/LoadingActivity";
import TabClass from "./Activities/BottomTabNavigatorActivity";
export default createStackNavigator({
  Loading: {
    screen: LoadingActivity
  },
  Signup: {
    screen: SignUpActivity
  },
  Main: {
    screen: TabClass
  },
  Login: {
    screen: LoginActivity
  },

  initialRouteName: "Loading"
});
