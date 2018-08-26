import React from "react";
import { FlatList, View, Button } from "react-native";
import { Card, } from "react-native-elements";


export default class PastCommutesActivity extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Past Commutes",
    }

    constructor(props) {
        super(props)
        this.data = [
            {
                source: {
                    latitude: "18.506765",
                    longitude: "73.815387",
                },
                destination: {
                    latitude: "18.548519",
                    longitude: "73.792121",
                },
                date: "21-Aug-18",
                time: "10:24 am",
                id: '1',
            },
        ]
    }

    reverseGeocode = async (lat, lng) => {
        try {
            let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true"
            let response = await fetch(url)
            let responseJson = await response.json()
            console.log(responseJson.results[0].formatted_address)
            return responseJson.results[0].formatted_address;
        } catch (e) {
            console.error(e)
        }
    }

    assignAddresses = () => {
        for (var i = 0; i < this.data.length; i++) {
            try {
                this.data[i].source_formatted_address = this.reverseGeocode(this.data[i].source.latitude,
                    this.data[i].source.longitude)
                this.data[i].destination_formatted_address = this.reverseGeocode(
                    this.data[i].destination.latitude, this.data[i].destination.longitude)
                console.log(this.data[i].source_formatted_address)
            } catch (e) {
                console.log(e)
            }
        }
    }


    render() {
        this.assignAddresses()
        return (
            <View>
                <FlatList

                    data={this.data}
                    renderItem={({ item }) => (
                        <Card
                            key={item.id}
                            title={item.source_formatted_address + " -> " + item.destination_formatted_address}
                        >

                        </Card>
                    )}
                />
                <Button
                    title="Maps"
                    onPress={() => {this.props.navigation.navigate('PastCommutesMap')}}
                ></Button>
            </View>
        )
    }
}