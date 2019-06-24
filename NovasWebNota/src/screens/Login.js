import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class LoginPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.positionTextLogin} >
                    <Text style={styles.textLogin}>Novas Craft</Text>
                </View>

                <View style={styles.viewEmail}>
                    <Text >Email:</Text>
                    <TextInput style={styles.inputLogin}></TextInput>
                </View>

                <View>
                    <Text >Senha:</Text>
                    <TextInput secureTextEntry={true} style={styles.inputLogin}></TextInput>
                </View>

                <View style={styles.viewButtonLogin} >
                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => this.props.navigation.navigate('')}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>

                </View>

                <TouchableHighlight style={styles.imgPositionLogin} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Image
                        style={styles.imgLogin}

                        source={require('../assets/cancel.png')}
                    />
                </TouchableHighlight>

            </View>
        );
    }
}