import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        height: 700,
        marginBottom: 50,
    },
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    label:{
        color: 'white',
        fontWeight: 'bold',
        marginTop: 25
    },
    inputField:{
        color: 'white',
        fontSize: 20,
    },
    inputFieldIos:{
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    buttomContainer:{
        alignItems: 'center',
        marginTop: 50
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText:{
        fontSize: 18,
        color: 'white'
    },
    newUserContainer:{
        alignItems: 'flex-end',
        marginTop: 10
    },

});
