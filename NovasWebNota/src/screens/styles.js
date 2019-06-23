import { StyleSheet } from 'react-native';

const stylesLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    positionTextLogin: {
        marginTop: 80,
    },

    textLogin: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },

    inputLogin: {
        width: 260,
        height: 50,
        marginBottom: 25,
        marginTop: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        fontSize: 18,

    },

    viewEmail: {
        marginTop: 60,
    },
    viewButtonLogin: {
        marginTop: 30,
    },
    buttonLogin:{
        borderRadius: 10,
        backgroundColor:'#1E6738', 
        height: 45,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    textButton: {
        color: 'white',
        fontSize: 20,

    }
});

export default stylesLogin;


