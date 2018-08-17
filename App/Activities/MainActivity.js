import React from 'react'
import { WebView, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
// import MapsActivity from './MapsActivity'
// import BlankActivity1 from './BlankActivity1'
import { Header, Icon } from 'react-native-elements'

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
            <WebView
                source={Trial}
            />
            // <Text>fespfe</Text>
        )
    }
}



// const TabNavigator = createBottomTabNavigator({
//     Maps: {
//         screen: MapsActivity,
//     },
//     BlankActivity1: {
//         screen: BlankActivity1,
        
//     }
// })


// export default class MainActivity extends React.Component {

//     static navigationOptions = {
//         headerLeft: null,
//         header:
//             <Header
//                 placement='left'
//                 backgroundColor="#008080"
//                 statusBarProps={{ barStyle: 'dark-content', animated: true }}
//                 centerComponent={{ text: 'ApkiYatra', style: { color: '#fff' } }}
//                 rightComponent={<Icon name='dots-three-vertical' type='entypo' onPress={() => console.log("Settings press")}/>}
//             />
//     }

//     constructor(props) {
//         super(props)
//         this.state = {
//             currentUser: null,
//         }
//     }

//     componentDidMount() {
//         const { currentUser } = auth.currentUser
//         this.setState({currentUser})
//     }

//     render() {
//         return (
//             <TabNavigator/>
//         )
//     }
// }