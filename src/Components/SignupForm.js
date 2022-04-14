import react from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { gs } from "../inc/Global";

export default function SignupForm(){

    return (
            
        <View style={[gs.wrapper, gs.bgcolor2, style.loginContainer]}>
            <View style={gs.container}>
                <Text style={[gs.textColor3, gs.textsm]}>Your Email</Text>
                <TextInput style={[gs.textInput, gs.textColor1, gs.mm, gs.borderRadius]}></TextInput>
                <TextInput style={[gs.textInput, gs.textColor1, gs.borderRadius]}></TextInput>
            </View>
        </View>
    );
    
}

const style = StyleSheet.create({
    loginContainer: {
        display: "flex",
        justifyContent: "center"
    },
});