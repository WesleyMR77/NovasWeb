import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    TouchableHighlight,
    BackAndroid
} from 'react-native';

import styles from './styles';
import api from '../services/api';

export default class LoginPage extends Component {

    state = {
        email: "",
        emailValid: true,
        password: ""
    };

    inputValidate = (email, inputType) => {
        const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (inputType === "email") {
            validation.test(email)
                ? this.setState({ emailValid: true })
                : this.setState({ emailValid: false });
        }
        if (this.state.emailValid) this.setState({ email });
    };

    handleSubmit = async () => {
        const { email, password } = this.state;
        await api.post("auth/authenticate", {
            email,
            password
        }).then(response => {
            console.warn(response); // redirecionar para a página
        }).catch(err => {
            const e = err.response;
            if (e.status === 400 && e.data.error === "User not found")
                this.setState({ emailValid: false });
            console.warn(err.response); // mostrar qual campo está errado
        });
    };

    static navigationOptions = {
        title: "NovasCraft",
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerStyle: {
            backgroundColor: "#008641"

        },
        headerTintColor: "#fff"

    }
 
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.positionTextLogin} >
                <View>
                <Image
                style={styles.imgLoginLogo}
                source={require('../assets/icons/LogoNovas.png')}/>
                </View>
                </View>

                <View style={styles.viewEmail}>
                    <Text >Email:</Text>
                    <TextInput
                        name="email"
                        placeholder="Email"
                        onChangeText={text => this.inputValidate(text, "email")}
                        style={styles.inputLogin}>
                    </TextInput>
                </View>

                <View>
                    <Text>Senha:</Text>
                    <TextInput
                        name="password"
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        style={styles.inputLogin}>
                    </TextInput>
                </View>

                <View style={styles.viewButtonLogin} >
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={this.handleSubmit}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.loginTitleCadastra}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    Cadastrar
                </Text>

            </View>
        );
    }
}