import React from "react";
import { Card, Tile } from "react-native-elements";
import { View } from "react-native";

export default class ETicketActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fare: 200,
            startPoint: "MIT College of Engineering",
            endPoint: "Ojas Apartments",
            midPoints: [
                'Point 1',
                'Point 2',
                'Point 3',
            ]
        }
    }

    render() {

        const { fare } = this.state
        const { startPoint } = this.state
        const { endPoint } = this.state
        const { midPoints } = this.state

        var titleText = "Fare: " + fare + "\nStart Point: " + startPoint + "\nEnd Point: " + endPoint

        return (
            <Card>
                <View>
                    <Tile
                        imageSrc={{ uri: 'https://graygrids.com/wp-content/uploads/edd/2018/01/I.png' }}
                        title={{ titleText }}
                        featured
                        contentContainerStyle={{ height: 70 }}
                        onPress={()=> {console.log('Hello E Ticket')}}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                            <Text>{{ startPoint }}</Text>
                            <Text>{{ endPoint }}</Text>
                        </View>
                    </Tile>
                </View>
            </Card>
        )
    }
}