import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component4 from './app/components/Component4/Component4';
import Component6 from './app/components/Component6/Component6';
import Home from './app/Home';
import Login from './app/Login';
import Splash from './app/Splash';
import Create from './app/Create';
import Forgot from './app/Forgot';
import Landing from './app/Landing';
import Profile from './app/Profile';
import Settings from './app/Settings';
import Contact from './app/Contact';
import Styles from './app/components/Styles/Styles';
import {createStackNavigator} from 'react-navigation';

const App = createStackNavigator({
  Home:  Home,
  Login:  Login,
  Create: Create,
  Forgot: Forgot,
  Landing: Landing,
  Profile: Profile,
  Settings: Settings,
  Contact: Contact
});

export default class swift extends Component{
    render(){
        return(
          <App/>
        )
    }
}

/*
export default createStackNavigator({
  home:{
    screen: swift
  }
})
*/

AppRegistry.registerComponent('swift', () => swift);