import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class ListPage extends React.Component {
    render() {
        return (
            <View style={styles.listMenuContainer}>
                <View style={styles.signUpCenter}>
                    <Text>Buscar:</Text>
                    <TextInput style={styles.inputLogin}></TextInput>
                    <ScrollView style={styles.listSizeScrollView}>
                        <Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text><Text>Buscar</Text>

                    </ScrollView>
                </View>

                
                    <View style={styles.listMenuBottom}>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                            <Image
                                style={styles.listImg}

                                source={require('../assets/icons/exit.png')}
                            />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('./')}>
                            <Image
                                style={styles.listImg}

                                source={require('../assets/icons/rigth-arrow.png')}
                            />
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('./')}>
                            <Image
                                style={styles.listImg}

                                source={require('../assets/icons/rigth-arrow.png')}
                            />
                        </TouchableHighlight>
                    </View>



            </View>
        );
    }
}