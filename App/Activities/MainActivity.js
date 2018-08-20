import React from 'react'
import { View, Button, TouchableOpacity } from 'react-native';
import { Icon, } from 'react-native-elements'
import { MapView, Constants, Location, Permissions, } from "expo";
import { Marker } from "react-native-maps";
import { Autocomplete } from "react-native-autocomplete-input";
import { createStackNavigator } from "react-navigation";
import ETicketActivity from "./ETicketActivity";



class MainActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: {
                latitude: 18.506765,
                longitude: 73.815387,
            },
            errorMessage: null,
            query: null,
        }
    }

    static navigationOptions = {
        header: null
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


    _filterData = (query) => {
        console.log(query)
    }


    render() {

        const { query } = this.state
        const data = this._filterData(query)

        return (
            <View
                style={{ width: '100%', height: "100%" }}
            >
                <View>
                    {/* <Autocomplete
                        data={[]}
                        defaultValue={query}
                        onChangeText={text => this.setState({ query: text })}
                        renderItem={item => (
                            <TouchableOpacity onPress={() => this.setState({ query: item })}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    /> */}
                    {/* <Autocomplete
                        data={"hdsfkss"}
                        defaultValue={query}
                        onChangeText={text => this.setState({ query: text })}
                        renderItem={item => (
                            <TouchableOpacity onPress={() => this.setState({ query: item })}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )}
                    /> */}
                </View>
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
                <Button title="Let's go" onPress={() => { this.props.navigation.navigate('ETicketActivity') }}>Let's go</Button>
            </View>
        )
    }
}


const StackNavBar = createStackNavigator({
    Map: MainActivity,
    ETicketActivity: ETicketActivity,
})

export default class NavigationClass extends React.Component {
    static navigationOptions = {
        tabBarLabel: "Commute",
        tabBarIcon: <Icon
            name='google-maps'
            type='material-community'
        />
    }

    render() {
        return (
            <StackNavBar />
        )
    }
}