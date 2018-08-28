import React from "react";
import { View, Button, StyleSheet,Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { MapView, Constants, Location, Permissions } from "expo";
import { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import GoogleDirectionsAPIKey from "../API_KEYS/keys";
import Autocomplete from "./AutoComplete";

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
            }
        };

        console.log(GoogleDirectionsAPIKey)

    }

    static navigationOptions = {
        header: null,
        tabBarLabel: "Commute",
        tabBarIcon: <Icon
            name='google-maps'
            type='material-community'
        />,
    };

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
                });
                console.log(location);
                this.setState({ location: location.coords });
            } else {
                this.setState({
                    errorMessage: "Permission to access Location denied"
                });
            }
        } catch (e) {
            console.log("Error for permissions: ", e);
        }
    };

    _filterData = query => {
        console.log(query);
    };

    render() {
        const { query } = this.state;
        const data = this._filterData(query);

        return (
            <View style={{ width: "100%", height: "100%" }}>
                <Autocomplete />
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
                    style ={styles.startButton}
                    onPress={() => { this.props.navigation.navigate("ETicketActivity") }} >
                    <Text style = {{color: 'white', fontWeight: 'bold'}}> Start Journey </Text>
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
