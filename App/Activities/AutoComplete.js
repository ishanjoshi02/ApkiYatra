import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import GoogleDirectionsAPIKey from "../API_KEYS/keys";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    margin: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 25
  },
  infoText: {
    textAlign: "center"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  directorText: {
    color: "grey",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center"
  },
  openingText: {
    textAlign: "center"
  }
});
const API = "https://swapi.co/api";
const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII"];
const locationsRequest = text =>
  new Promise((resolve, reject) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=geocode&language=fr&key=` +
        GoogleDirectionsAPIKey
    )
      .then(request => request.json())
      .catch(e => reject(e))
      .then(data => {
        resolve(
          data.predictions.map(r => ({
            title: r.structured_formatting.main_text,
            place_id: r.place_id
          }))
        );
      })
      .catch(error => {
        reject(error);
      });
  });
class AutocompleteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      query: "",
      data: [],
      hideResults: false
    };
  }

  onChangeText = async text => {
    try {
      const locations = await locationsRequest(text);
      this.setState({
        hideResults: false,
        query: text,
        data: locations
      });
    } catch (e) {
      console.log(e);
    }
  };

  onSelect = selectedLocation => {
    this.setState({
      query: selectedLocation.title,
      hideResults: true
    });
    if (this.props.handleLocationSelect) {
      this.props.handleLocationSelect(selectedLocation);
    }
  };

  render() {
    const { query } = this.state;
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.autocompleteContainer}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          data={this.state.data}
          defaultValue={query}
          hideResults={this.state.hideResults}
          onChangeText={this.onChangeText}
          placeholder="Enter Your Destination"
          renderItem={locationItem => (
            <TouchableOpacity onPress={() => this.onSelect(locationItem)}>
              <Text style={styles.itemText}>{locationItem.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#F5FCFF",
//     flex: 1,
//     paddingTop: 0,
//     height: 50
//   },
//   autocompleteContainer: {
//     marginLeft: 0,
//     marginRight: 0
//   },
//   itemText: {
//     fontSize: 15,
//     margin: 2
//   },
//   descriptionContainer: {
//     // `backgroundColor` needs to be set otherwise the
//     // autocomplete input will disappear on text input.
//     backgroundColor: "#F5FCFF",
//     marginTop: 8
//   },
//   infoText: {
//     textAlign: "center"
//   },
//   titleText: {
//     fontSize: 18,
//     fontWeight: "500",
//     marginBottom: 10,
//     marginTop: 10,
//     textAlign: "center"
//   },
//   directorText: {
//     color: "grey",
//     fontSize: 12,
//     marginBottom: 10,
//     textAlign: "center"
//   },
//   openingText: {
//     textAlign: "center"
//   }
// });

export default AutocompleteExample;
