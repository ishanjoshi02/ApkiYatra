import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignUpActivity from './Activities/SignUpActivity';
import MainActivity from './Activities/MainActivity';
import LoginActivity from './Activities/LoginActivity';
import LoadingActivity from './Activities/LoadingActivity'

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
    screen: MainActivity,
  },
  Login: {
    screen: LoginActivity,
  },
  
    initialRouteName: 'Loading'
  
});

