import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

export default class SignUpPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpCenter}>
                    <Text style={styles.signUpTitle}>Novas Craft</Text>
                    <Text style={styles.signUpH1}>Crie um novo personagem</Text>
                </View>

                <View>
                    <View>
                        <Text>Avatar</Text>
                        <TouchableHighlight>
                            <Image
                                style={styles.imgLogin}
                                source={require('../assets/icons/exit.png')}
                            />
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight>
                            <Image
                                style={styles.imgLogin}
                                source={require('../assets/icons/exit.png')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <Image
                                style={styles.imgLogin}
                                source={require('../assets/icons/exit.png')}
                            />
                        </TouchableHighlight>
                    <View>
                        
                    </View>
                </View>


            </View>
        );
    }
}