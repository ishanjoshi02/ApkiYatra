import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignUpActivity from './Activities/SignUpActivity';
import MainActivity from './Activities/MainActivity';

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
  SignUp: {
    screen: SignUpActivity
  },
  MainActivity: {
    screen: MainActivity
  }
});
