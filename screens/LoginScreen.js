import react from "react";
import FormLogin from "../src/Components/FormLogin";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";

export default function LoginScreen(){

    return (
        <FormLogin />
    );
}

const style = StyleSheet.create({
    loginContainer: {
        display: "flex",
        justifyContent: "center"
    },
});


  