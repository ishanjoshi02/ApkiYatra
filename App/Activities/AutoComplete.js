import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const API = "https://swapi.co/api";
const ROMAN = ["", "I", "II", "III", "IV", "V", "VI", "VII"];

class AutocompleteExample extends Component {
  static renderFilm(film) {
    const { title, director, opening_crawl, episode_id } = film;
    const roman = episode_id < ROMAN.length ? ROMAN[episode_id] : episode_id;

    return (
      <View>
        <Text style={styles.titleText}>
          {roman}. {title}
        </Text>
        <Text style={styles.directorText}>({director})</Text>
        <Text style={styles.openingText}>{opening_crawl}</Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      query: "",
      data: []
    };
  }

  componentDidMount() {
    fetch(`${API}/films/`)
      .then(res => res.json())
      .then(json => {
        const { results: films } = json;
        this.setState({ films });
      });
  }

  findFilm(query) {
    if (query === "") {
      return [];
    }

    const { films } = this.state;
    const regex = new RegExp(`${query.trim()}`, "i");
    return films.filter(film => film.title.search(regex) >= 0);
  }

  onChangeText = async text => {
    const locationsRequest = new Promise((resolve, reject) => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=${text}&types=establishment&key=AIzaSyCfLbyBRSOQX6RQrwyYc0KX9bRCfVtbgXw`
      )
        .then(request => request.json())
        .catch(e => reject(e))
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });

    try {
      const location = await locationsRequest;
      console.log(location);
    } catch (e) {
      console.log(e);
    }

    this.setState({
      query: text,
      data: [
        {
          title: text
        }
      ]
    });
  };

  render() {
    const { query } = this.state;
    const films = this.findFilm(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        data={this.state.data}
        defaultValue={query}
        onChangeText={this.onChangeText}
        placeholder="Enter Your Destination"
        renderItem={({ title, release_date }) => (
          <TouchableOpacity onPress={() => this.setState({ query: title })}>
            <Text style={styles.itemText}>{title}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    paddingTop: 0,
    height: 50,
  },
  autocompleteContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 8
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

export default AutocompleteExample;
