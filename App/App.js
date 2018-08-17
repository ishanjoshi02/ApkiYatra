import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignUpActivity from './Activities/SignUpActivity';
import LoginActivity from './Activities/LoginActivity';
import LoadingActivity from './Activities/LoadingActivity'
import BottomTabNavigatorActivity from './Activities/BottomTabNavigatorActivity';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}



export default createStackNavigator({
  Loading: {
    screen: LoadingActivity,
  },
  Signup: {
    screen: SignUpActivity,
  },
  Main: {
    screen: BottomTabNavigatorActivity,
  },
  Login: {
    screen: LoginActivity,
  },
  
    initialRouteName: 'Loading'
  
});

