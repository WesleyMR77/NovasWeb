
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';


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
