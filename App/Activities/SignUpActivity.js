import React from 'react';
import { Button, View, Text } from 'react-native';
import { Icon, FormInput, FormLabel, FormValidationMessage, Card } from 'react-native-elements';
import { auth } from '../utils/firebase';

export default class SignUpActivity extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };
  }

  static navigationOptions = {
    title: "Sign Up Page",
    drawerLabel: "Login",
    headerLeft: null,
    drawerIcon:
      <Icon name="login"
        type="entypo" />,
    headerStyle: {

    }
  }


  handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.props.navigation.navigate('Main')
    } catch (error) {
      this.setState({
        errorMessage: error.message
      })
    }
  }

  render() {
    return (
      <Card
        containerStyle={{ padding: 20, borderRadius: 10, }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 24, marginLeft: 20, marginBottom: 10, marginTop: 10, }}>
            Sign Up
          </Text>
          {this.state.errorMessage &&
            <FormValidationMessage>
              {this.state.errorMessage}
            </FormValidationMessage>}

          <FormLabel>Email</FormLabel>
          <FormInput
            autoCapitalize='none'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            autoCapitalize='none'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <View
            style={{ margin: 10, marginBottom: 0 }}
          >
            <Button
              title="Sign Up"
              onPress={this.handleSignUp}
            />
          </View>
          <View style={{ margin: 10, }}>
            <Button
              title="Already have an account? Login"
              onPress={() => { this.props.navigation.navigate('Login') }}
            />
          </View>
        </View>
      </Card>
    )
  }
}