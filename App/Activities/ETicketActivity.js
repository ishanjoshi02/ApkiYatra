import React from "react";
import { Card, Tile, Button, Icon } from "react-native-elements";
import { View, Text, ScrollView } from "react-native";

export default class ETicketActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fare: 200,
            startPoint: "MIT College of Engineering",
            endPoint: "Ojas Apartments",
            midPoints: [
                {
                    stop: 'Point 1',
                    mode: "Bus",
                    ticketFare: 5,
                    startTime: "8:00 am",
                    endTime: '8:13 am'
                },
                {
                    stop: 'Point 2',
                    mode: "Train",
                    ticketFare: 15,
                    startTime: "8:15 am",
                    endTime: "8:50 am"
                },
                {
                    stop: 'Point 3',
                    mode: "Walking",
                    ticketFare: 0,
                    startTime: "8:50 am",
                    endTime: "9:00 am"
                },
            ]
        }
    }

    static navigationOptions = {
        header: null,
    }

    addIconsToData = () => {
        var midPoints = this.state.midPoints;
        for (var i = 0; i < midPoints.length; i += 1) {
            var icon = null
            var type = null
            switch (midPoints[i].mode) {
                case "Bus":
                    icon: 'bus'
                    type: 'material-community'
                    break;
                case "Train":
                    icon: 'train'
                    type: 'material-community'
                    break;
                case "Walking":
                    icon: 'md-walk'
                    type: 'ionicon'
                default:
                    break;
            }

            midPoints[i].icon = icon
            midPoints[i].iconType = type
        }

        this.setState(
            midPoints = midPoints
        )

    }

    render() {

        const { fare } = this.state
        const { startPoint } = this.state
        const { endPoint } = this.state
        const { midPoints } = this.state

        var commuteDetailsText = startPoint + " -> " + endPoint

        this.addIconsToData()

        return (
            <View
                style={{ flex: 1 }}
            >
                <Button title='Pay' onPress={() => { console.log('Payment') }} />
                <Text>{commuteDetailsText}</Text>
                <ScrollView>
                    {
                        midPoints.map((item, key) => {
                            <Card
                                containerStyle={{ margin: 10, }}
                                title={item.mode}
                                icon={<Icon name={item.icon} type={item.iconType} />}
                            >
                                <Text>{item.stop}</Text>
                                <Text>{item.ticketFare}</Text>
                            </Card>
                        })
                    }
                </ScrollView>
                <Button title='Go back' onPress={() => { this.props.navigation.navigate('Map') }} />
            </View>
        )
    }
}