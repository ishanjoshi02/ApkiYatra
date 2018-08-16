import React from 'react';
import { Text } from 'react-native';

export default class BlankActivity1 extends React.Component {

    static navigationOptions = {
        title: "Blank Screen"    
    }

    render() {
        return(
            <Text>Helloooooo</Text>
        )
    }
}