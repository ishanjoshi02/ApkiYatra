import React from "react";
import { Card, Icon } from "react-native-elements";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  BackHandler,
  Button
} from "react-native";
import GoogleDirectionsAPIKey from "../API_KEYS/keys";

const query = ({ source, destination }) =>
  new Promise((resolve, reject) => {
    fetch(
      "https://wt-ae86fc1e6fb911ae3bcdae6a5250020b-0.sandbox.auth0-extend.com/test",
      {
        body: '{\n\t"source":"mumbai",\n\t"destination":"pune"\n}',
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Postman-Token": "c0c4ae73-24b6-7387-c337-7560fbbce9d6"
        },
        method: "POST"
      }
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
class ETicketActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loaded: false
    };
    this.data = {
      fare: 200,
      startPoint: "MIT College of Engineering",
      endPoint: "Ojas Apartments",
      midPoints: [
        {
          stop: "Point 1",
          mode: "Bus",
          ticketFare: 5,
          startTime: "8:00 am",
          endTime: "8:13 am"
        },
        {
          stop: "Point 2",
          mode: "Train",
          ticketFare: 15,
          startTime: "8:15 am",
          endTime: "8:50 am"
        },
        {
          stop: "Point 3",
          mode: "Walking",
          ticketFare: 0,
          startTime: "8:50 am",
          endTime: "9:00 am"
        }
      ]
    };

    console.log(this.props.navigation.getParam("origin", "null"));

    console.log(this.props.navigation.getParam("destination", "null"));
  }

  componentDidMount() {
    query({
      source: "pune",
      destination: "mumbai"
    }).then(r => {
      console.log(r.routes[0].legs);
    });
  }

  static navigationOptions = {
    showLabel: false,
    header: null,
    tabBarLabel: "Commute",
    tabBarIcon: <Icon name="google-maps" type="material-community" />
  };

  addIconsToData = () => {
    var midPoints = this.data.midPoints;
    for (var i = 0; i < midPoints.length; i += 1) {
      var icon = null;
      var type = null;
      switch (midPoints[i].mode) {
        case "Bus":
          icon = "bus";
          type = "material-community";
          break;
        case "Train":
          icon = "train";
          type = "material-community";
          break;
        case "Walking":
          icon = "md-walk";
          type = "ionicon";
        default:
          break;
      }

      midPoints[i].icon = icon;
      midPoints[i].iconType = type;
      midPoints[i].id = i;
    }

    this.data.midPoints = midPoints;
  };

  render() {
    var commuteDetailsText = this.data.startPoint + " -> " + this.data.endPoint;
    this.addIconsToData();

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.navigate("MainActivity");
          }}
        >
          <Text style={{ color: "#dd525b" }}> Go Back </Text>
        </TouchableOpacity>

        <ScrollView>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.travelPoint}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  {this.data.startPoint}
                </Text>
              </View>
              <Icon name="arrow-long-right" type="entypo" />
              <View style={styles.travelPoint}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  {this.data.endPoint}
                </Text>
              </View>
            </View>
          </View>

          {this.data.midPoints.map(item => (
            <Card key={item.id} title={item.mode}>
              <Icon name={item.icon} type={item.iconType} />
              <Text>Station : {item.stop}</Text>
              <Text>Fare : {item.ticketFare}</Text>
            </Card>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.payButton}
          onPress={() => {
            console.log("Payment");
          }}
        >
          <Text> Rs. 100 PAY </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  travelPoint: {
    flex: 1,
    padding: 15,
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#dd525b",
    padding: 10,
    margin: 10,
    borderRadius: 20
  },
  payButton: {
    alignItems: "center",
    backgroundColor: "#7cdd7f",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    elevation: 2
  },
  title: {
    fontSize: 19,
    fontWeight: "bold"
  }
});

export default ETicketActivity;
