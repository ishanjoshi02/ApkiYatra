import React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { MapView, Constants, Location, Permissions } from "expo";
import { Marker } from "react-native-maps";
<<<<<<< HEAD
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

=======
import Autocomplete from "./AutoComplete";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="search"
      minLength={2}
      autoFocus={false}
      returnKeyType={"search"}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      getDefaultValue={() => ""}
      query={{
        key: "AIzaSyCfLbyBRSOQX6RQrwyYc0KX9bRCfVtbgXw",
        language: "en",
        type: "(locality, sub_locality)"
      }}
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={
        {
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
        }
      }
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: "distance",
        types: "food"
      }}
      filterReverseGeocodingByTypes={[
        "locality",
        "administrative_area_level_3"
      ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms
    />
  );
};
>>>>>>> 5f496202e3cb1f797bd12849fdfe2b6c3815edc4

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
    tabBarLabel: "Commute",
    tabBarIcon: <Icon name="google-maps" type="material-community" />
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

<<<<<<< HEAD
        const { query } = this.state
        const data = this._filterData(query)

        return (
            <View
                style={{ width: '100%', height: "100%" }}
            >
                <View>
                    {/* <Autocomplete
                        data={[]}
=======
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Autocomplete />
        {/* <View>
                    <Autocomplete
                        data={data}
>>>>>>> 5f496202e3cb1f797bd12849fdfe2b6c3815edc4
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
<<<<<<< HEAD
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
=======
                    />
                </View> */}
        {/* <Autocomplete /> */}
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onMapReady={e => console.log("ready")}
        >
          <Marker coordinate={this.state.location} title="Ishan's Home" />
        </MapView>
        <Button title="Let\'s go">Let's go</Button>
      </View>
    );
  }
}
>>>>>>> 5f496202e3cb1f797bd12849fdfe2b6c3815edc4
