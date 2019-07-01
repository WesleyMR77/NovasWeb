import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var sizeMenu = (height/100);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imgLoginLogo: {
        maxWidth:120,
        maxHeight: 120,
        marginTop: 40, 
    
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
        backgroundColor: '#FFFFFF',
        width: 260,
        borderRadius: 4,
        maxHeight: 290,
        borderColor: '#d6d7da',
        borderWidth: 2,
        
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
        justifyContent: 'space-around',
        backgroundColor: 'gray',
        width: width,
        height: 60,
    },

    listInputSpaceTop: {
        marginTop: 40,
    },

    listInput: {
        width: 260,
        height: 42.5,
        marginBottom: 25,
        marginTop: 3,       
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        fontSize: 16,

    },
    listNameUser: {
        marginLeft: 8,
        marginTop: 8,
        width: 240,    
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#d6d7da',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImgOptionUser:{  
        width: 40,
        height: 40,

    },
    listImgPositonStatus:{
        paddingLeft: 7.5,
        paddingRight: 5,
    },
    listImgPositonList:{
        paddingLeft: 7.5,
        paddingRight: 5,
        borderLeftWidth: 2,
        borderColor: '#d6d7da',
        
    },
    listTextNameUser:{
        backgroundColor: '#bfc7c0',
        padding: 10,
        marginLeft: -4,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },

    listNameUserID:{
        marginLeft: 8,
        marginTop: 8,
        width: 240,    
        borderRadius: 15,
        borderColor: '#d6d7da',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
    },
    listTextNameUserID:{
        padding: 10,
    },

    //// Create Status

    createStatusTextAvatar:{
        marginLeft: 10,
    },
    createStatusAddImg:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: 120,
    },

    createStatusImgProfileSize:{
        maxWidth: 110,
        maxHeight: 80,
    },

    createStatusBorderImg:{
        borderWidth: 2,
        maxHeight: 100,
        backgroundColor: 'white',
    },

    createStatusImgCameraSize:{
        maxWidth: 50,
        maxHeight: 40,
        marginLeft: 15,
    },

    createStatusImgGallerySize:{
        maxWidth: 50,
        maxHeight: 40,
        marginLeft: 10,
    },
    createStatusInputLine:{
        flexDirection: 'row'
    },

    createStatusInput:{
        width: 260,
        height: 32.5,
        marginBottom: 12.5,
        marginTop: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        fontSize: 10,
    }, 

    createStatusInputMiddle:{
        width: 110,
        height: 32.5,
        marginBottom: 12.5,
        marginTop: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        fontSize: 10,
    },
    createStatusInputMiddleSpace:{
        marginLeft: 40,
    },

    createStatusSpaceView:{
        marginTop: 15,
    },
    createStatusMarginTopImg:{
        marginTop: 15,
    },

    ///Profile

    profileContainer:{
        alignItems: 'center',
        marginTop: height/17,
        flex: 1,
        justifyContent: 'space-between',
    },

    profileTextFontSize:{
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    profileTextPosition:{
        marginLeft: (-width/10)
    },
    profileButtonAjusty:{
        borderRadius: 10,
        backgroundColor:'#188c3b', 
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: 15, 
    },
    profileImgExit:{
        alignItems: 'center',
    },

    ///EditeProfile

    EditProfileContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF', 
    },
    EditProfilePositionText:{
        marginTop: height/10,
        alignItems: 'center'
    },
    EditProfileTextSizeMin:{
        fontWeight: 'bold',
        color: 'black',
    },

    /// Status
    statusInfoPersonLine:{
        flexDirection: 'row',
    },
    statusSpaceImg:{
        marginLeft: 20,
    },
    statusTextColor:{
        color: 'black',
        marginBottom: 2.5,
    },
    statusPositionAttribute:{
        alignItems: 'flex-start',
        marginRight: width/4,
    },
    statusTextAttribute1:{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 25,
        width: 180,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 12.5,
    },

    statusTextAttribute2:{
        flex: 1,
        backgroundColor: '#8E04E6',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 25,
        width: 180,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 12.5,
    },

    statusTextAttribute3:{
        flex: 1,
        backgroundColor: '#B7B900',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 25,
        width: 180,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 12.5,
    },

    statusTextAttribute4:{
        flex: 1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 25,
        width: 180,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 12.5,
    },

    statusTextAttribute5:{
        flex: 1,
        backgroundColor: '#00FF00',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 25,
        width: 180,
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 12.5,
    },

    statusTextBold:{
        fontWeight: 'bold',
    },
    statusTextColor:{
        color: 'black',
    },
    statusSpaceLife:{
        marginTop: 5,
    },

    ///EditStatus
    editStatusCenter:{
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 30,
    }

});






export default styles;