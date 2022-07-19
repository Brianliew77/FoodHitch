import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
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
    uploadText:{
        color:'white',
        textAlign:'center'
    },
    text2 : {
        marginTop:30,
        fontStyle: 'normal',
        fontSize: 24,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'flex-end',
        textAlign: "center", 
    },
    textNumber : {
        marginTop:30,
        fontStyle: '700',
        fontSize: 28,
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'flex-end',
        textAlign: "center",
        fontStyle:'italic'
    },
    button: {
        backgroundColor: '#788eec',
        marginTop: 10,
        paddingHorizontal: 100,
        height:48,
        marginTop:10,
        marginBottom:10,
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
        paddingLeft: 16
    }
})