import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#393939'
    },
    text : {
        marginBottom: 20,
        fontStyle: 'normal',
        paddingHorizontal: 15,
        fontSize: 40,
        color: '#FFFFFF',
        alignSelf: 'baseline',
        fontWeight: '700', 
    },
    text2 : {
        fontSize: 16,
        fontWeight:'400',
        color: 'white',
        alignSelf:'flex-start',
        marginTop: 20,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#788eec',
        padding:10,
        paddingHorizontal: 160,
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