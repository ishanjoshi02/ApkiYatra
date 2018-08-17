import React from "react";
import { Text } from "react-native";
import { Icon } from "react-native-elements";

export default class SettingsActivity extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Settings",
        tabBarIcon: <Icon
            name='md-settings'
            type='ionicon'
        />
    }

    render() {
        return (
            <Text>Hello there!</Text>
        )
    }
}