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
import { PG_APP_ID, PG_APP_SECRET } from "../API_KEYS/payment_keys";
//

// get token
// fetch("https://ces-gamma.cashfree.com/ces/v1/authorize", {
//   headers: {
//     "Cache-Control": "no-cache",
//     "Postman-Token": "c1487909-ff29-c0eb-0f3f-191c021b8d93",
//     "X-Client-Id": "CF1299EQ4HFV088RSMAMQ",
//     "X-Client-Secret": "093abc39656d8e75d3efee3278785a4d3a1b996d"
//   },
//   method: "POST"
// });
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

const createPayment = ({ amount }) =>
  new Promise((resolve, reject) => {
    // fetch("https://test.cashfree.com/api/v1/order/create", {
    //   body: `appId=${PG_APP_ID}&secretKey=${PG_APP_SECRET}&orderId=${Math.floor(
    //     Math.random() * 10000
    //   )}&orderAmount=${amount}&orderNote=Subscription&customerName=Test%2520Name&customerPhone=9111122222&customerEmail=cykulkarni%40outlook.com&sellerPhone=&returnUrl=https%3A%2F%2Fgoogle.com¬ifyUrl=https%3A%2F%2Fgoogle.com&paymentModes=&pc=`,
    //   headers: {
    //     "Cache-Control": "no-cache",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     "Postman-Token": "d2fc6269-de74-0c1f-d3e2-36441d58339f"
    //   },
    //   method: "POST"
    // })
    fetch("https://test.cashfree.com/api/v1/order/create", {
      body: `appId=1299453863e19f8d84ff7b7e9921&secretKey=7c3d369598eecfe27e6c8613f35b2ef3005874c4&orderId=${Math.floor(
        Math.random() * 10000
      )}&orderAmount=154&orderNote=Subscription&customerName=Test%2520Name&customerPhone=9111122222&customerEmail=cykulkarni%40outlook.com&returnUrl=https%3A%2F%2Fgoogle.com`,
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        "Postman-Token": "fdd195fc-e133-aa57-f3f6-d63fbf6426b6"
      },
      method: "POST"
    })
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
      fare: 200,
      midPoints: [
        {
          id: 1,
          stop: "Point 1",
          mode: "Bus",
          ticketFare: 5,
          startTime: "8:00 am",
          endTime: "8:13 am"
        },
        {
          id: 2,
          stop: "Point 2",
          mode: "Train",
          ticketFare: 15,
          startTime: "8:15 am",
          endTime: "8:50 am"
        },
        {
          id: 3,
          stop: "Point 3",
          mode: "Walking",
          ticketFare: 0,
          startTime: "8:50 am",
          endTime: "9:00 am"
        }
      ]
    };

    console.log(this.props.navigation.getParam("originMeta", "null"));
  }

  static navigationOptions = {
    showLabel: false,
    header: null,
    tabBarLabel: "Commute",
    tabBarIcon: <Icon name="google-maps" type="material-community" />
  };

  makepayment = async amount => {
    const data = await createPayment({
      amount: 100
    });
    console.log(data);
    this.props.navigation.navigate("Payment", {
      url: data.paymentLink
    });
  };

  // addIconsToData = () => {
  //     var midPoints = this.state.midPoints;
  //     var temp = []
  //     for (var i = 0; i < midPoints.length; i += 1) {
  //         var icon = null
  //         var type = null
  //         switch (midPoints[i].mode) {
  //             case "Bus":
  //                 icon = 'bus'
  //                 type = 'material-community'
  //                 break;
  //             case "Train":
  //                 icon = 'train'
  //                 type = 'material-community'
  //                 break;
  //             case "Walking":
  //                 icon = 'md-walk'
  //                 type = 'ionicon'
  //             default:
  //                 break;
  //         }

  //         temp.push({
  //             icon: icon,
  //             iconType: type,
  //             id: i,
  //         })
  //     }
  //     return temp

  // }

  render() {
    var midPoints = this.state.midPoints;
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
                  {this.props.navigation.getParam("origin", null).name}
                </Text>
              </View>
              <Icon name="arrow-long-right" type="entypo" />
              <View style={styles.travelPoint}>
                <Text
                  style={{ textAlignVertical: "center", textAlign: "center" }}
                >
                  {this.props.navigation.getParam("destination", null).name}
                </Text>
              </View>
            </View>
          </View>

          {midPoints.map(item => (
            <Card key={item.id} title={item.mode}>
              <Text>Station : {item.stop}</Text>
              <Text>Fare : {item.ticketFare}</Text>
            </Card>
          ))}
        </ScrollView>

        <TouchableOpacity style={styles.payButton} onPress={this.makepayment}>
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
