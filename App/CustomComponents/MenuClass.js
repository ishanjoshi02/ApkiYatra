import { React } from "react";


export default class Menu extends React.Component {
    render() {
        return(
            <Menu 
                        
                onVisible={(isVisible) => {
                    this.setState(isVisible)
                }}
                data={[
                    {
                        title: "Profile",
                        onPress: () => {
                    }
                    }, 
                            {
                                title: "Previous Commutes",
                                onPress: () => {

                                }
                            },
                            {
                                title: "Logout",
                                onPress: () => {
                                    auth.signOut().then(function() {
                                        this.props.navigation.navigate('Loading')
                                    }).catch(function(e) {
                                        alert("Trouble signing out")
                                        console.log(e)
                                    })
                                }
                            }
                        ]}
                    />
        )
    }
}