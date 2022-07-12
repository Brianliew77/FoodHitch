
import { StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        backgroundColor: '#393939'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color:'grey',

    },    
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
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

})