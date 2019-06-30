
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';


import LoginPage from './src/screens/Login';
import SignUpPage from './src/screens/SignUp';
import ListPage from './src/screens/List';
import CreateStatusPage from './src/screens/CreateStatus';
import ProfileAdminPage from './src/screens/ProfileAdmin';
import ProfilePage from './src/screens/Profile';
import EditStatusPage from './src/screens/EditStatus';
import EditProfilePage from './src/screens/EditProfile';



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
        },
        CreateStatus: {
            screen: CreateStatusPage
        },
        ProfileAdmin: {
            screen: ProfileAdminPage
        },
        Profile: {
            screen: ProfilePage
        },
        EditStatus:{
            screen: EditStatusPage
        },
        EditProfile:{
            screen: EditProfilePage
        },
    },
    {
        initialRouteName: 'Login'
    }
);



// const TabNavigator = createBottomTabNavigator({
//     List: ListPage,
//     ProfileAdmin: ProfileAdminPage, 
// },
// {
//     tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveBackgroundColor: 'white',
//         style: {
//             inactiveBackgroundColor: 'gray',
//         },
//         showLabel: false
//     },
//     defaultNavigationOptions: ({navigation}) => ({
//         tabBarIcon: ({focused, horizontal, tintColor}) => {
//             const {routeName} = navigation.state;
//             let IconComponent = Ionicons;
//             let iconName;
            
//             if(routeName === 'List'){
//                 iconName = 'md-home';
//             }else if (routeName === 'ProfileAdmin'){
//                 iconName = 'md-person';

//             }
//             return <IconComponent name={iconName} size={50} color={tintColor}/>;

//         } 
//     })
// })

const AppContainer = createAppContainer(AppNavigator);
// const TabNavigator = createAuthentication(TabNavigator);


export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}

// export default createAppContainer (TabNavigator)


