import React from 'react';
import { Text } from 'react-native';

export default class BlankActivity extends React.Component {

    static navigationOptions = {
        title: "Blank Screen 1",
        headerMode: 'none'
    }

    render() {
        return(
            <Text>Hello</Text>
        )
    }
}