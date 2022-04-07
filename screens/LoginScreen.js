import react from "react";
import LoginForm from "../src/LoginForm";
import { View, Text, StyleSheet } from "react-native";
import { gs } from "../src/inc/Global";

export default function LoginScreen(){

    return (
            
        <View style={styles.container}>
            <View>
            <Text style={gs.title}>Theme test</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
});


  