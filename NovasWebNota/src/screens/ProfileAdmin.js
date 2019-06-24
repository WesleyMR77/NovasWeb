import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class ProfileAdminPage extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.signUpCenter}>
                    <Text>Buscar:</Text>
                    <TextInput style={styles.inputLogin}></TextInput>

                </View>

                <View style={{}}>
                    <TextInput style={styles.inputLogin}></TextInput>
                </View>
            </View>
        );
    }
}