import React, { Component } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class ProfileAdminPage extends Component {
    static navigationOptions = {
        title: "NovasCraft",
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1 
        },
        headerStyle: {
            backgroundColor:"#008641"
        },
        headerTintColor: "#fff"
        
    }
    render() {
        return (
            <View style={styles.profileContainer}>
                <View style={styles.profileAjustLeft}>
                    <View style={styles.profileTextPosition} >
                        <Text>Nome:</Text>
                        <Text style={styles.profileTextFontSize}>Nome do Usuário </Text>
                    </View>
                    <View style={styles.profileTextPosition} >
                        <Text>Email:</Text>
                        <Text style={styles.profileTextFontSize}>Email </Text>
                    </View>
                    <View style={styles.profileTextPosition} >
                        <Text>Senha:</Text>
                        <Text style={styles.profileTextFontSize}>Senha</Text>
                    </View>
                    <View style={styles.profileTextPosition} >
                        <Text>Tipo:</Text>
                        <Text style={styles.profileTextFontSize}>Tipo de Conta </Text>
                    </View>
                </View>

                <View >
                    <TouchableOpacity style={styles.profileButtonAjusty}
                        onPress={() => this.props.navigation.navigate('EditProfile')}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Editar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.profileButtonAjusty}
                        onPress={() => this.props.navigation.navigate('Login')}
                        underlayColor='#fff'>

                        <Text style={styles.textButton}>Sair</Text>
                    </TouchableOpacity>


                </View>


                <View style={styles.listMenuBottom}>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('./')}>
                        <Image
                            style={styles.listImg}

                            source={require('../assets/icons/profile.png')}
                        />
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('List')}>
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