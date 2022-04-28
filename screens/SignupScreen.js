import react from "react";
import FormSignup from "../src/Components/FormSignup";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";
import { TextInput } from "react-native-gesture-handler";

export default function SignupScreen(){

    return (
        <FormSignup />
    );
}

const style = StyleSheet.create({
    loginContainer: {
        display: "flex",
        justifyContent: "center"
    },
});


  