import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, TouchableHighlight, Image, ScrollView } from 'react-native';

import styles from './styles';

export default class SignUpPage extends Component {
    static navigationOptions = {
        title: "Criar Personagem",
        headerStyle: {
            backgroundColor:"#008641"
        },
        headerTintColor: "#fff"
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signUpCenter}>
                    <Text style={styles.signUpTitle}>Novas Craft</Text>
                </View>

                <View style={styles.createStatusAddImg}>
                    <View>
                        <Text style={styles.createStatusTextAvatar}>Avatar</Text>
                        <TouchableHighlight style={styles.createStatusBorderImg}>
                            <Image
                                style={styles.createStatusImgProfileSize}
                                source={require('../assets/icons/profile.png')}
                            />
                        </TouchableHighlight>
                    </View>
                        <TouchableHighlight style={styles.createStatusMarginTopImg}>
                            <Image
                                style={styles.createStatusImgCameraSize}
                                source={require('../assets/icons/camera.png')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.createStatusMarginTopImg}>
                            <Image
                                style={styles.createStatusImgGallerySize}
                                source={require('../assets/icons/gallery.png')}
                            />
                        </TouchableHighlight>
                </View>

                <View style={styles.createStatusSpaceView}>
                    <View>
                        <Text style={styles.createStatusTextAvatar} >Nome do Personagem:</Text>
                        <TextInput style={styles.createStatusInput}></TextInput>
                    </View>

                    <View style={styles.createStatusInputLine}>
                        <View >
                            <Text style={styles.createStatusTextAvatar} >Idade:</Text>
                            <TextInput style={styles.createStatusInputMiddle}></TextInput>
                        </View>
                        <View style={styles.createStatusInputMiddleSpace}>
                            <Text style={styles.createStatusTextAvatar}>Sexo:</Text>
                            <TextInput style={styles.createStatusInputMiddle}></TextInput>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.createStatusTextAvatar} >Classe:</Text>
                        <TextInput style={styles.createStatusInput}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.createStatusTextAvatar} >Grupo:</Text>
                        <TextInput style={styles.createStatusInput}></TextInput>
                    </View>

                </View>

                <View style={styles.imgMesmaLinSingUp}>

                <TouchableOpacity style={styles.profileButtonAjusty}
                        onPress={() => this.props.navigation.navigate('List')}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Confirmar</Text>
                    </TouchableOpacity>

      
                </View>


            </View>
        );
    }
}