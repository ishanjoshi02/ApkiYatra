import { createBottomTabNavigator } from "react-navigation";
import NavigationClass from "./MainActivity";
import SettingsActivity from "./SettingsActivity";
import PastCommutesActivity from "./PastCommutes";
import React from "react";
import { Icon, Header } from "react-native-elements";

const NavBar = createBottomTabNavigator({
    StackBar: {
        screen: NavigationClass,
    },
    PastCommutes:
    {
        screen: PastCommutesActivity,
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