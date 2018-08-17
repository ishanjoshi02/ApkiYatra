import React from 'react'
import { View, } from 'react-native'; 
import { Header, Icon } from 'react-native-elements'
import { MapView, Constants, Location, Permissions, } from "expo";
import { Marker } from "react-native-maps";

export default class MainActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: {
                latitude: 18.506765,
                longitude: 73.815387,
            },
            errorMessage: null,
        }
    }


    static navigationOptions = {
        tabBarLabel: "Commute",
        tabBarIcon: <Icon
            name='google-maps'
            type='material-community'
        />
    }


    componentWillMount() {
        if (!Constants.isDevice) {
            this.setState({
                errorMessage: "This will not work on an android emulator"
            })
        } else {
            try {
                this._getLocationAsync().catch(e => console.log(e))
            } catch (error) {
                console.log('_getLocationAsync Error\n', e)
            }
        }
    }

    _getLocationAsync = async () => {

        try {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted') {
                console.log('granted')
                const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
                console.log(location)
                this.setState({ location: location.coords })
            } else {
                this.setState({
                    errorMessage: "Permission to access Location denied"
                })
            }
        } catch (e) {
            console.log("Error for permissions: ", e)
        }


    }


    render() {
        return (
            <View
                style={{ flex: 1, width: '100%', height: "100%" }}
            >
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
                        title="Ishan's Home"
                    />
                </MapView>
            </View>
        )
    }
}