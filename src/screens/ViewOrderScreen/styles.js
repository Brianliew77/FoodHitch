import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#393939'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    title: {
        fontSize: 32,
        color:'black',

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
    status : {
        marginTop:30,
        fontStyle: 'normal',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: "center",
        fontWeight: '700',
        backgroundColor:'grey',
        paddingHorizontal:18
    },
    noOrder:{textAlign:'center',fontSize:32, color:'white',marginTop:20},
    price : {
        marginTop:30,
        fontStyle: 'normal',
        fontSize: 32,
        paddingHorizontal:80,
        color: '#FFFFFF',
        textAlign: "center",
        fontWeight: '700',
        backgroundColor:'green'
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
    button: {
        backgroundColor: '#788eec',
        marginTop: 10,
        width:300,
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
        paddingLeft: 16
    },
    buttonTitle:{
        fontSize:20
    }
})