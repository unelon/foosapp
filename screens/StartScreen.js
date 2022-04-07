import { ThemeProvider } from "@react-navigation/native";
import {react} from "react";
import { View, Text, Image, ImageBackground} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";
import { gs } from "../src/inc/Global";

export default function StartScreen({navigation}) {

    
    
    return (
        <View style={[gs.bgcolor1, {flex: 1}]}>     
            <View style={{
                alignItems: "center",
                marginTop: 40
            }}>
                <Image source={require("../src/images/logo.png")} style={{width: 270, height: 184}} />
            </View>
            <View style={{position: "absolute", bottom: 0, width: "100%", paddingLeft: 20, paddingRight: 20}}>
                <TouchableOpacity style={{backgroundColor: "red", marginBottom: 70}} onPress={() => {navigation.navigate("LoginScreen")}}>
                    <Text style={{fontSize: 30, textAlign: "center"}}>Click me</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const backgroundImage = require("../src/images/splash.jpg");