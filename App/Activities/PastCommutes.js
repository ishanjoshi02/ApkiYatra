import React from "react";
import { FlatList, View, Text } from "react-native";


export default class PastCommutesActivity extends React.Component {

    static navigationOptions = {
        tabBarLabel:"Past Commutes",
    }

    constructor(props) {
        super(props)
        this.data = [
            'Commute 1',
            "Commute 2",
            'Commute 3',
        ]
    }


    render() {
        return (
            <View>
                <FlatList

                    data={this.data}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}