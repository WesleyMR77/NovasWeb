import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class StatusPage extends Component {
    static navigationOptions = {
        title: "NovasCraft",
        headerStyle: {
            backgroundColor: "#008641"
        },
        headerTintColor: "#fff"

    }
    render() {
        return (
            <View style={styles.profileContainer}>

                <View style={styles.statusInfoPersonLine}>
                    <View>
                        <Text style={styles.statusTextColor}>Nome do Personagem</Text>
                        <Text style={styles.statusTextColor}>Idade: 99</Text>
                        <Text style={styles.statusTextColor}>Sexo: Masculino</Text>
                        <Text style={styles.statusTextColor}>Classe: XXXXXX</Text>
                        <Text style={styles.statusTextColor}>Grupo: XXXXXX</Text>
                    </View>
                    <View style={styles.statusSpaceImg}>
                        <TouchableHighlight style={styles.createStatusBorderImg}>
                            <Image
                                style={styles.createStatusImgProfileSize}
                                source={require('../assets/icons/profile.png')}
                            />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.statusPositionAttribute}>
                    <View >
                        <Text style={styles.statusTextColor}>Sangue</Text>
                        <View style={styles.statusTextAttribute1}>
                            <Text style={styles.statusTextBold}>1200</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.statusTextColor}>Mana</Text>
                        <View style={styles.statusTextAttribute2}>
                            <Text style={styles.statusTextBold}>1000</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.statusTextColor}>Fome</Text>
                        <View style={styles.statusTextAttribute3}>
                            <Text style={styles.statusTextBold}>800</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.statusTextColor}>Sede</Text>
                        <View style={styles.statusTextAttribute4}>
                            <Text style={styles.statusTextBold}>300</Text>
                        </View>
                    </View>


                    <View >
                        <Text style={styles.statusTextColor}>Experiência</Text>
                        <View style={styles.statusTextAttribute5}>
                            <Text style={styles.statusTextBold}>2000</Text>
                        </View>
                    </View>

                    <View style={styles.statusSpaceLife}>
                        <Text style={styles.statusTextColor}>Corações de Vida: 99</Text>
                    </View>
                </View>




                <View style={styles.listMenuBottom}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}>
                        <Image
                            style={styles.listImg}

                            source={require('../assets/icons/profile.png')}
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