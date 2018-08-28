import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import MainActivity from "./MainActivity";
import SettingsActivity from "./SettingsActivity";
import ETicketActivity from './ETicketActivity'
import PastCommutesActivity from "./PastCommutes";
import PastCommutesMapActivity from './PastCommuteMap'
import React from "react";
import { Icon, Header } from "react-native-elements";

const NavBar = createDrawerNavigator({
    Commute: createStackNavigator({
        MainActivity: {
            screen: MainActivity,
        },
        ETicketActivity: {
            screen: ETicketActivity,

        },
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon
                name='menu'
                type='entypo'
                onPress={() => navigation.navigate('DrawerOpen')}
            />,
            drawerLabel: "Commute",
            drawerIcon: <Icon
                name='google-maps'
                type='material-community'
            />,
        }),
    }),
    
    Settings: {
        screen: SettingsActivity,
    },



})

// PastCommutes: createStackNavigator({
//     PastCommutesList: {
//         screen: PastCommutesActivity,
//         navigationOptions: {
//             header: null,

//         },
//     },
//     PastCommutesMap: {
//         screen: PastCommutesMapActivity,
//         navigationOptions: {
//             header: null,
//         },
//     }

// })
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