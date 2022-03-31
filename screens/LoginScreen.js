import react from "react";
import LoginForm from "../src/LoginForm";
import { View, Text, StyleSheet } from "react-native"

export default function LoginScreen(){

    return (
            
        <View style={styles.container}>
            <Text>dsada</Text>
            <LoginForm></LoginForm>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red", 
        height: "100%",
        width: "100%"
    },
});


  