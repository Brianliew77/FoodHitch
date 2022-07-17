import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#393939',
    },
    profileWrap: {
        flexDirection:'row',
        backgroundColor: '#393939',
        marginTop:10
    },
    emailText:{
        color:'white',
        alignSelf:'center'
    },
    welcomeText1:{
        fontSize:32,
        color:'white',
        marginTop: 30,
        fontWeight:'700'
        
    },
    profileImage:{
        height:50,
        width:50,
        marginLeft:10,
        borderRadius:30
    },
    text : {
        marginTop:30,
        fontStyle: 'normal',
        fontSize: 32,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'flex-end',
        textAlign: "center",
        fontWeight: '700', 
    },
    emailText : {
        marginTop:10,
        fontStyle: 'italic',
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        fontWeight: '700', 
    },
    logo: {
        margin:20,
        height: 90,
        width: 90,
        alignSelf: "center",
    },
    lineWrap:{
        flexDirection:'row',
        alignItems:'stretch'
    },
    logo2: {
        height: 40,
        width: 40,
        alignSelf: "center",
    },
    text2: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '400',
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 80,
        marginRight: 80,
    },
    text3: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        color: '#191D21',
        fontSize: 16,
        height:24,
        letterSpacing: -0.5,
        lineHeight: 24

    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    button1: {
        backgroundColor: '#23E9B4',
        height: 88,
        width: 343,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: 'center'
    },
    button2: {
        marginTop: 30,
        backgroundColor: '#91D7E0',
        height: 213,
        width: 343,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        width:200,
        textAlign:'center'
    }
})