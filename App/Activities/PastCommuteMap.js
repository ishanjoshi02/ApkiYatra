import React, { Component } from "react";
import { MapView } from "expo";

export default class PastCommutesMapActivity extends Component {
    render() {
        return (
            <MapView
                style={{ flex: 1, }}
                initialRegion={{
                    latitude: 18.506765,
                    longitude: 73.815387,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={this.state.location}
                    title="Ishan's Home"
                />
            </MapView>
        )
    }
}