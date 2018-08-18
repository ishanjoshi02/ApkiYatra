import React from "react";
import { Text, View, StyleSheet, } from "react-native";
import { Icon, Avatar, Button } from "react-native-elements";
import { auth } from '../utils/firebase'
import * as firebase from "firebase";

export default class SettingsActivity extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Settings",
        tabBarIcon: <Icon
            name='md-settings'
            type='ionicon'
        />
    }

    handleGoogleSignIn = async () => {
        console.log("Google Sign in initiated")

    }

    handleFacebookSignIn = async () => {

    }

    render() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                <Avatar
                    size='xlarge'
                    rounded
                    icon={{ name: 'user' }}
                    title='IJ'
                    onPress={() => console.log("Works")}
                />
                <Button
                    title='Google Sign In'
                    onPress={this.handleGoogleSignIn.bind(this)}
                />
                <Button
                    title='Facebook Sign In'
                    onPress={this.handleFacebookSignIn.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignInOptionsStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    SignInOptionsItemStyle: {
        flexGrow: 1
    }
})