import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import stylesLogin from './styles';


export default class SignUpPage extends Component {
    render() {
        return (
            <View style={stylesLogin.container}>
                <View>
                    <Text>Novas Craft</Text>
                    <Text>Crie a conta do usuário</Text>
                </View>

                <View style={stylesLogin.viewEmail}>
                    <Text >Email:</Text>
                    <TextInput style={stylesLogin.inputLogin}></TextInput>
                </View>

                <View>
                    <Text >Senha:</Text>
                    <TextInput secureTextEntry={true} style={stylesLogin.inputLogin}></TextInput>
                </View>

            </View>
        );
    }
}