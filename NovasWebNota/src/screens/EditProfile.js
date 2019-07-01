import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class EditProfilePage extends Component {
    static navigationOptions = {
        title: "NovasCraft",
        headerStyle: {
            backgroundColor:"#008641"
        },
        headerTintColor: "#fff"
        
    }
    render() {
        return (
            <View style={styles.EditProfileContainer}>
                <View style={styles.EditProfilePositionText} >
                    <Text style={styles.EditProfileTextSizeMin} >NovasCraft</Text>
                    <Text style={styles.textLogin}>Editar Perfil</Text>
                </View>

                <View style={styles.viewEmail}>
                    <Text >Nome:</Text>
                    <TextInput style={styles.inputLogin}></TextInput>
                </View>

                <View>
                    <Text >Senha:</Text>
                    <TextInput secureTextEntry={true} style={styles.inputLogin}></TextInput>
                </View>

                <View style={styles.viewButtonLogin} >
                    <TouchableOpacity style={styles.buttonLogin}
                        onPress={() => this.props.navigation.navigate('Profile')}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Confirmar</Text>
                    </TouchableOpacity>

                </View>
                



            </View>
        );
    }
}