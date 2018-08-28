import React from "react";
import { FlatList, View, Button } from "react-native";
import { Card } from "react-native-elements";
import { WebView } from "react-native";
export default class PastCommutesActivity extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <WebView
        source={{
          uri: this.props.navigation.getParam("url", null)
        }}
      />
    );
  }
}
