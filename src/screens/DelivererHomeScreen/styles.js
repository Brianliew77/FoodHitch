import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        backgroundColor: '#393939'
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
    logo: {
        margin:20,
        height: 90,
        width: 90,
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
    welcomeText1:{
        fontSize:18,
        color:'white',
        
    },
    profileWrap: {
        flexDirection:'row',
        backgroundColor: '#393939',
        marginTop:10
    },
    welcomeText2:{
        fontSize:18,
        fontStyle:'italic',
        color: '#788eec',
        textAlign: "center",
    },

    profileImage:{
        height:50,
        width:50,
        marginLeft:10,
        borderRadius:30
    },
    button2: {
        margin: 10,
        backgroundColor: '#91D7E0',
        height: 88,
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
        paddingLeft: 16
    }
})
