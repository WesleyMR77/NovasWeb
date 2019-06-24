import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class SignUpPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpCenter}>
                    <Text>Buscar:</Text>
                    <TextInput style={styles.inputLogin}></TextInput>
                    <ScrollView style={styles.listSizeScrollView}>
                    <Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text>

                    </ScrollView>
                </View>
            

  

            </View>
        );
    }
}