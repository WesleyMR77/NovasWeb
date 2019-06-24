
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginPage from './src/screens/Login';
import SignUpPage from './src/screens/SignUp';

//rotas
const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        SignUp: {
            screen: SignUpPage
        }
    },
    {
        initialRouteName: 'SignUp'
    }
);

// const TabNavigator =  createBottomTabNavigator({
//     Login: LoginPage,
//     SignUp: SignUpPage

// })

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
