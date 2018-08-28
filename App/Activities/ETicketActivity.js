import React from "react";
import { Card, Icon } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, } from "react-native";
import GoogleDirectionsAPIKey from '../API_KEYS/keys'

const query = (source, destination) =>
    new Promise((resolve, reject) => {
        fetch(
            "https://wt-ae86fc1e6fb911ae3bcdae6a5250020b-0.sandbox.auth0-extend.com/test",
            {
                body: '{\n\t"source":"' + source + '",\n\t"destination":"' + destination + '"\n}',
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



let request = (lat, lng) =>
    new Promise((resolve, reject) => {
        fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true&key=AIzaSyA_40v57dPXz9vVAXZjq_1usAB0J53nq44", {
            headers: {
                "Cache-Control": "no-cache",
                "Postman-Token": "0adb2580-32e5-4ba8-9676-cfdce73db677"
            }
        })
            .then(request => request.json())
            .catch(e => reject(e))
            .then(data => {
                console.log(data)
                resolve(data)
            })
    })




class ETicketActivity extends React.Component {

    constructor(props) {
        super(props)
        this.midPoints = [
            {
                id: 1,
                stop: 'Point 1',
                mode: "Bus",
                ticketFare: 5,
                startTime: "8:00 am",
                endTime: '8:13 am'
            },
            {
                id: 2,
                stop: 'Point 2',
                mode: "Train",
                ticketFare: 15,
                startTime: "8:15 am",
                endTime: "8:50 am"
            },
            {
                id: 3,
                stop: 'Point 3',
                mode: "Walking",
                ticketFare: 0,
                startTime: "8:50 am",
                endTime: "9:00 am"
            },
        ]
    
        this.allVals = null
    }

    componentDidMount() {

        let source = this.props.navigation.getParam('origin', null).name
        let dest = this.props.navigation.getParam('destination', null).name

        this.allVals = query(source, dest)
        console.log("Query return")
        console.log(this.allVals)
    }

    static navigationOptions = {
        showLabel: false,
        header: null,
        tabBarLabel: "Commute",
        tabBarIcon: <Icon name="google-maps" type="material-community" />
    };


    formatData = (res) => {

    }

    addIconsToData = (midPoints) => {
        var temp = []
        for (var i = 0; i < midPoints.length; i += 1) {
            var icon = null
            var type = null
            switch (midPoints[i].mode) {
                case "Bus":
                    icon = 'bus'
                    type = 'material-community'
                    break;
                case "Train":
                    icon = 'train'
                    type = 'material-community'
                    break;
                case "Walking":
                    icon = 'md-walk'
                    type = 'ionicon'
                default:
                    break;
            }

            temp.push({
                icon: icon,
                iconType: type,
                id: i,
                stop: midPoints[i].stop,
                ticketFare: midPoints[i].ticketFare,
            })
        }
        return temp

    }
    generateData() {
        return []
    }
    render() {
        var midPoints = this.addIconsToData(
            this.midPoints
        );
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
