import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class ListPage extends React.Component {
    static navigationOptions = {
        title: "NovasCraft",
        headerStyle: {
            backgroundColor:"#008641"
        },
        headerTintColor: "#fff"
        
    }
    render() {
        return (
            <View style={styles.listMenuContainer}>
                <View style={styles.listInputSpaceTop}>
                    <Text>Buscar:</Text>
                    <TextInput style={styles.listInput}></TextInput>

                    <ScrollView style={styles.listSizeScrollView}>
                        <View style={styles.listNameUser}>
                            <Text style={styles.listTextNameUser} >Nome do Usuário</Text>
                            <TouchableHighlight style={styles.listImgPositonStatus} onPress={() => this.props.navigation.navigate('EditStatus')}>
                                <Image
                                    style={styles.listImgOptionUser}

                                    source={require('../assets/icons/status.png')}
                                />
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.listImgPositonList} onPress={() => this.props.navigation.navigate('/exit')}>
                                <Image
                                    style={styles.listImgOptionUser}

                                    source={require('../assets/icons/exit.png')}
                                />
                            </TouchableHighlight>
                        </View>

                        <View style={styles.listNameUserID}>
                            <Text style={styles.listTextNameUserID} onPress={() => this.props.navigation.navigate('')}>Nome do Usuário</Text>
                        </View>
                        <View style={styles.listNameUserID}>
                            <Text style={styles.listTextNameUserID} onPress={() => this.props.navigation.navigate('')}>Nome do Usuário</Text>
                        </View>
                        <View style={styles.listNameUserID}>
                            <Text style={styles.listTextNameUserID} onPress={() => this.props.navigation.navigate('')}>Nome do Usuário</Text>
                        </View>
                    </ScrollView>
                </View>


                <View style={styles.listMenuBottom}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('ProfileAdmin')}>
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


                </View>



            </View>
        );
    }
}