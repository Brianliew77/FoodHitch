import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#393939'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#D9D9D9',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 10
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
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    wordText: {
        fontSize: 20,
        color: '#FFFFFF',
        paddingTop: 30,
        paddingLeft: 55,
        alignItems: "center",
        justifyContent: 'center',

    }
})