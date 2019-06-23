import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity} from 'react-native';
import stylesLogin from './styles';

export default class LoginPage extends Component {
    render() {
        return (
            <View style={stylesLogin.container}>
                <View style={stylesLogin.positionTextLogin} >
                    <Text style={stylesLogin.textLogin}>Novas Craft</Text>
                </View>

                <View style={stylesLogin.viewEmail}>
                    <Text >Email:</Text>
                    <TextInput style={stylesLogin.inputLogin}></TextInput>
                </View>

                <View>
                    <Text >Senha:</Text>
                    <TextInput secureTextEntry={true}  style={stylesLogin.inputLogin}></TextInput>
                </View>

                <View style={stylesLogin.viewButtonLogin} >
                    <TouchableOpacity style={stylesLogin.buttonLogin}
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        underlayColor='#fff'>
                            
                        <Text style={stylesLogin.textButton}>Entrar</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}