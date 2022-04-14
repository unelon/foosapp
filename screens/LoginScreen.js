import react from "react";
import LoginForm from "../src/Components/LoginForm";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";

export default function LoginScreen(){

    return (
        <LoginForm />
    );
}

const style = StyleSheet.create({
    loginContainer: {
        display: "flex",
        justifyContent: "center"
    },
});


  