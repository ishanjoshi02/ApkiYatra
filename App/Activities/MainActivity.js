import React from 'react'
// import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import BlankActivity from './BlankActivity'
import BlankActivity1 from './BlankActivity1'
import { Header, Icon } from 'react-native-elements'

import { auth } from '../utils/firebase'

const TabNavigator = createBottomTabNavigator({
    BlankActivity: {
        screen: BlankActivity,
    },
    BlankActivity1: {
        screen: BlankActivity1,
        
    }
})


export default class MainActivity extends React.Component {

    static navigationOptions = {
        headerLeft: null,
        header:
            <Header
                placement='left'
                backgroundColor="#008080"
                statusBarProps={{ barStyle: 'dark-content', animated: true }}
                centerComponent={{ text: 'ApkiYatra', style: { color: '#fff' } }}
                rightComponent={<Icon name='dots-three-vertical' type='entypo' onPress={() => console.log("Settings press")}/>}
            />
    }

    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
        }
    }

    componentDidMount() {
        const { currentUser } = auth.currentUser
        this.setState({currentUser})
    }

    render() {
        return (
            <TabNavigator/>
        )
    }
}