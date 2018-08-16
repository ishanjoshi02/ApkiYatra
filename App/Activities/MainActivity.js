import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import BlankActivity from './BlankActivity'
import BlankActivity1 from './BlankActivity1'

import { auth } from '../utils/firebase'

const TabNavigator = createBottomTabNavigator({
    BlankActivity: {
        screen: BlankActivity
    },
    BlankActivity1: {
        screen: BlankActivity1
    }
})


export default class MainActivity extends React.Component {

    static navigationOptions = {
        headerLeft: null,
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