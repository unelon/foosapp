import react from "react";
import LoginForm from "../src/LoginForm";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";
import { TextInput } from "react-native-gesture-handler";

export default function LoginScreen(){

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


  