import React from 'react';
import { Button, View, Text } from 'react-native';
import { Icon, FormInput, FormLabel, FormValidationMessage, Card } from 'react-native-elements';
import { auth } from '../utils/firebase';

export default class LoginActivity extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    };
  }

  static navigationOptions = {
    title: "Log In Page",
    drawerLabel: "Login",
    drawerIcon:
      <Icon name="login"
        type="entypo" />,
    headerStyle: {

    }
  }


  handleLogIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      this.props.navigation.navigate('Main')
    } catch (error) {
      this.setState({
        errorMessage: error.message
      })
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Card
          containerStyle={{ padding: 20, borderRadius: 10, }}
        >
          <View style={{}}>
            <Text style={{ fontSize: 24, marginLeft: 20, marginBottom: 10, marginTop: 10, }}>
              Log In
          </Text>
            {this.state.errorMessage &&
              <FormValidationMessage>
                {this.state.errorMessage}
              </FormValidationMessage>}

            <FormLabel>E-mail</FormLabel>
            <FormInput autoCapitalize='none' onChangeText={email => this.setState({ email })} />

            <FormLabel>Password</FormLabel>
            <FormInput
              secureTextEntry
              autoCapitalize='none'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <View style={{ margin: 20 }}>
              <Button title="Log In" onPress={this.handleLogIn} />
            </View>
          </View>
        </Card>
      </View>
    )
  }
}
