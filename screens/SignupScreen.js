import react from "react";
import SignupForm from "../src/Components/SignupForm";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";
import { TextInput } from "react-native-gesture-handler";

export default function SignupScreen(){

    return (
        <SignupForm />
    );
}

const style = StyleSheet.create({
    loginContainer: {
        display: "flex",
        justifyContent: "center"
    },
});


  