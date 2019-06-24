
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginPage from './src/screens/Login';
import SignUpPage from './src/screens/SignUp';
import ListPage from './src/screens/List';

//rotas
const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        SignUp: {
            screen: SignUpPage
        },
        List: {
            screen: ListPage
        }
    },
    {
        initialRouteName: 'List'
    }
);

// const TabNavigator = createBottomTabNavigator({
//     List: ListPage,
// },
//     {
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveBackgroundColor: 'white',
//             style: {
//                 inactiveBackgroundColor: 'gray',
//             },
//         }
//     }
// );

const AppContainer = createAppContainer(AppNavigator);
// const TabNavigator = createAuthentication(TabNavigator);


export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}


