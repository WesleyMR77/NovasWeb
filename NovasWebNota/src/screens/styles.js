import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    positionTextLogin: {
        marginTop: 50,
    },

    textLogin: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },

    inputLogin: {
        width: 260,
        height: 45,
        marginBottom: 25,
        marginTop: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        fontSize: 18,
    },

    viewEmail: {
        marginTop: 50,
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
        fontWeight: 'bold'
    },

    imgLogin: {
        width: 40,
        height: 40,
    },

    imgPositionLogin: {
        marginTop: 55,
    },

    loginTitleCadastra: {
        marginTop: 20,
    },
    // SignUp

    signUpCenter: {
        alignItems: 'center',
        marginTop: 40,

    },

    signUpTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
    },

    signUpH1: {
        fontSize: 23,
        color: 'black',
        fontWeight: 'bold',
    },

    signUpSpaceEmail: {
        marginTop: 37.5,
    },

    signUpInput: {
        width: 260,
        height: 40,
        marginBottom: 25,
        marginTop: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        fontSize: 18,
    },

    imgSpaceSignUp: {
        marginRight: 80,
    },

    imgMesmaLinSingUp:{
        flexDirection: 'row',
        marginTop: 7.5,
        justifyContent: 'center',
    },

    // List
    listSizeScrollView: {
        backgroundColor: '#D6E4E2',
        width: 260,
        borderRadius: 5,
        maxHeight: 290,
        borderColor: 'black',
    },

    listMenuContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    listImg: {
        width: 60,
        height: 60,
    },

    listMenuBottom:{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },

    // menuList: {

    // }
});




export default styles;


