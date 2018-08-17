import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class MapsActivity extends React.Component {

    static navigationOptions = {
        title: "Blank Screen",
        tabBarIcon: <Icon name='google-maps' type='material-community'/>    
    }

    render() {
        return(
            <Text>Helloooooo</Text>
        )
    }
}