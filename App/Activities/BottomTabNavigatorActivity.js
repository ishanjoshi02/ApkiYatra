import { createBottomTabNavigator } from "react-navigation";
import MainActivity from "./MainActivity";
import SettingsActivity from "./SettingsActivity";
import React from "react";
import { Icon, Header } from "react-native-elements";

const NavBar = createBottomTabNavigator({


    Main: {
        screen: MainActivity,


    },
    Settings: {
        screen: SettingsActivity,
    }
})

export default class TabClass extends React.Component {
    static navigationOptions = {
        headerLeft: null,
        header:
            <Header
                placement='left'
                backgroundColor="#008080"
                statusBarProps={{ barStyle: 'dark-content', animated: true }}
                centerComponent={{ text: 'ApkiYatra', style: { color: '#fff', } }}
            />
    }

    render() {
        return (
            <NavBar />
        )
    }

}