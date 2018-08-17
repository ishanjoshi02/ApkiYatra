import React from 'react'
import { WebView, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
// import MapsActivity from './MapsActivity'
// import BlankActivity1 from './BlankActivity1'
import { Header, Icon } from 'react-native-elements'
import { MapView } from "expo";

import { auth } from '../utils/firebase'

const Trial = require('../htmls/home.html')

export default class MainActivity extends React.Component {
    static navigationOptions = {
                headerLeft: null,
                header:
                    <Header
                        placement='left'
                        backgroundColor="#008080"
                        statusBarProps={{ barStyle: 'dark-content', animated: true }}
                        centerComponent={{ text: 'ApkiYatra', style: { color: '#fff' } }}
                        rightComponent={<Icon name='dots-three-vertical' type='entypo' onPress={() => console.log("Settings press")}/>}
                    />
            }
    render() {
        return(
            <MapView 
                style={{ flex: 1, }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onMapReady	={ e => console.log('ready')}
            >
            </MapView>
        )
    }
}