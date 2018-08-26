import React, { Component } from "react";
import { MapView } from "expo";
import MapViewDirections from 'react-native-maps-directions';
import GoogleDirectionsAPIKey from "../API_KEYS/keys";
import { Marker } from "react-native-maps";
export default class PastCommutesMapActivity extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coords: null,
            origin: {
                location: {
                    latitude: 18.506765,
                    longitude: 73.815387
                },
            },
            destination: {
                location: {
                    latitude: 18.506765,
                    longitude: 73.73,
                },
            }
        }
    }

    render() {
        return (
            <MapView

                style={{ flex: 1, }}
                region={{
                    latitude: this.state.origin.location.latitude,
                    longitude: this.state.origin.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                <Marker
                    coordinate={{
                        latitude: this.state.origin.location.latitude,
                        longitude: this.state.origin.location.longitude,
                    }} />
                <Marker
                    coordinate={{
                        latitude: this.state.destination.location.latitude,
                        longitude: this.state.destination.location.longitude,
                    }} />
                <MapViewDirections
                    origin={this.state.origin.location}
                    destination={this.state.destination.location}
                    strokeWidth={3}
                    apikey={GoogleDirectionsAPIKey}
                >
                </MapViewDirections>
            </MapView>
        )
    }
}