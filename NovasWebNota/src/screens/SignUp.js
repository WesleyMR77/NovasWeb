import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

export default class SignUpPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpCenter}>
                    <Text style={styles.signUpTitle}>Novas Craft</Text>
                    <Text style={styles.signUpH1}>Crie a conta do usuário</Text>
                </View>

                <View style={styles.signUpSpaceEmail}>
                    <Text >Email:</Text>
                    <TextInput style={styles.signUpInput}></TextInput>
                </View>

                <View>
                    <Text >Nome:</Text>
                    <TextInput secureTextEntry={true} style={styles.signUpInput}></TextInput>
                </View>

                <View>
                    <Text >Senha:</Text>
                    <TextInput secureTextEntry={true} style={styles.signUpInput}></TextInput>
                </View>

                <View>
                    <Text >Senha do Mestre:</Text>
                    <TextInput secureTextEntry={true} style={styles.signUpInput}></TextInput>
                </View>

                <View style={styles.imgMesmaLinSingUp}>

                    <TouchableHighlight style={styles.imgSpaceSignUp} onPress={() => this.props.navigation.navigate('Login')}>
                        <Image
                            style={styles.imgLogin}

                            source={require('../assets/icons/exit.png')}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('List')}>
                        <Image
                            style={styles.imgLogin}

                            source={require('../assets/icons/rigth-arrow.png')}
                        />
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}