import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { MapView, Constants, Location, Permissions } from "expo";
import { Marker } from "react-native-maps";
import { createStackNavigator } from "react-navigation";
import ETicketActivity from "./ETicketActivity";
import Autocomplete from "./AutoComplete";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class MainActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude: 18.506765,
                longitude: 73.815387
            },
            errorMessage: null,
            query: null
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
                        coordinate={this.state.location}
                        title="Your current location"
                    />
                </MapView>
                <Button title="Let's go" onPress={() => { this.props.navigation.navigate("ETicketActivity") }}></Button>
            </View>
        )
    }
}
