import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements';
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
      var errorCode = error.code;
      var errorMessage = error.message;
      this.setState({
        errorMessage: error.message
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Log In</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Log In" onPress={this.handleLogIn} />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
