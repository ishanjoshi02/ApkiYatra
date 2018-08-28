import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { MapView, Constants, Location, Permissions } from "expo";
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import GoogleDirectionsAPIKey from "../API_KEYS/keys";
import Autocomplete from "./AutoComplete";
import { Geocoder } from 'react-native-geocoder'


class MainActivity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            location: {
                latitude: 18.506765,
                longitude: 73.815387
            },
            errorMessage: null,
            query: null,
            origin: {
                latitude: 18.506765,
                longitude: 73.815387
            },

            destination: {
                latitude: 18.481768,
                longitude: 73.807372
            },
            originMeta: {
                name: null,
                place_id: null,
            },
            destinationMeta: {
                name: null,
                place_id: null,
            }
        };

    }

    static navigationOptions = {
        header: null,
        tabBarLabel: "Commute",
        tabBarIcon: <Icon
            name='google-maps'
            type='material-community'
        />,
    };

    handleLocationSelect = async (selectedLocation) => {

        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + selectedLocation.title + '&key=' + GoogleDirectionsAPIKey;

        const u = 'https://maps.googleapis.com/maps/api/directions/json?origin=mit+college+of+engineering+kothrud&destination=' + selectedLocation.title.replace(" ", "+") + '&mode=transit&alternatives=true'


        const res = await fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log(
                    responseJson
                )

                console.log(responseJson.results[0].geometry.location)
                var updatedVal = {
                    latitude: responseJson.results[0].geometry.location.lat,
                    longitude: responseJson.results[0].geometry.location.lng,
                }

                console.log(updatedVal)

                this.setState({
                    destination: updatedVal,
                })

            })




    }

    componentWillMount() {
        if (!Constants.isDevice) {
            this.setState({
                errorMessage: "This will not work on an android emulator"
            });
        } else {
            try {
                this._getLocationAsync().catch(e => console.log(e));
            } catch (error) {
                console.log("_getLocationAsync Error\n", e);
            }
        }
    }

    _getLocationAsync = async () => {
        try {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === "granted") {
                console.log("granted");
                const location = await Location.getCurrentPositionAsync({
                    enableHighAccuracy: true
                })
                this.setState({ location: location.coords });
            } else {
                this.setState({
                    errorMessage: "Permission to access Location denied"
                })
            }
        } catch (e) {
            console.log("Error for permissions: ", e);
        }
    };


    render() {


        return (
            <View style={{ width: "100%", height: "100%" }}>
                <Autocomplete
                    handleLocationSelect={this.handleLocationSelect}
                />
                <MapView
                    style={{ flex: 1, }}
                    initialRegion={{
                        latitude: this.state.location.latitude,
                        longitude: this.state.location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onMapReady={e => console.log('ready')}
                >
                    <Marker
                        coordinate={this.state.origin}
                        title="Source"
                    />

                    <Marker
                        coordinate={this.state.destination}
                        title="Destination"
                    />

                    <MapViewDirections
                        origin={this.state.origin}
                        destination={this.state.destination}
                        strokeWidth={3}
                        apikey={GoogleDirectionsAPIKey}
                    ></MapViewDirections>
                </MapView>
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={() => { this.props.navigation.navigate("ETicketActivity", {
                        origin: this.state.origin,
                        destination: this.state.destination,
                    }) }} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}> Start Journey </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    startButton: {
        alignItems: 'center',
        backgroundColor: '#189adb',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        elevation: 2,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    }
});

export default MainActivity;
