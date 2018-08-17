import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class BlankActivity extends React.Component {

    static navigationOptions = {
        title: "Blank Screen 1",
        tabBarIcon: <Icon name='address' type='entypo'/>    
    }

    render() {
        return(
            <Text>Hello</Text>
        )
    }
}