import React from 'react'
import { auth } from '../utils/firebase'
import Spinner from 'react-native-loading-spinner-overlay'

export default class LoadingActivity extends React.Component {

  componentDidMount() {
      auth.onAuthStateChanged(user => {
        console.log("User \n", user)
        this.props.navigation.navigate(user ? 'Main' : 'Signup')
      })
  }

  render() {
    return(
      <Spinner animation='slide' size='large' textContent='Loading...'></Spinner>
    )
  }

}