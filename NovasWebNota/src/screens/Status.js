import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class StatusPage extends Component {
    render() {
        return (
            <View style={styles.profileContainer}>

                



                <View style={styles.listMenuBottom}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                        <Image
                            style={styles.listImg}

                            source={require('../assets/icons/profile.png')}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('./')}>
                        <Image
                            style={styles.listImg}

                            source={require('../assets/icons/list.png')}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('./')}>
                        <Image
                            style={styles.listImg}

                            source={require('../assets/icons/status.png')}
                        />
                    </TouchableHighlight>
                </View>


            </View>
        );
    }
}