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
                    <TouchableHighlight>
                        <Image
                            style={styles.createStatusImgCameraSize}
                            source={require('../assets/icons/camera.png')}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <Image
                            style={styles.createStatusImgGallerySize}
                            source={require('../assets/icons/gallery.png')}
                        />
                    </TouchableHighlight>
                </View>

                <View>

                </View>


            </View>
        );
    }
}