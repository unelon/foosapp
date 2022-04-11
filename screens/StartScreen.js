import { ThemeProvider } from "@react-navigation/native";
import { View, Text, Image, ImageBackground} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";
import { useUser } from "../src/hooks/useUser";
import { gs } from "../src/inc/Global";

export default function StartScreen({navigation}) {    
    const {
        loginWidthFacebook
    } = useUser()
    return (
        <View style={[gs.bgcolor1, {flex: 1}]}>     
            <View style={{
                alignItems: "center",
                marginTop: 40
            }}>
                <Image source={require("../src/images/logo.png")} style={{width: 270, height: 184, marginTop: 50}} />
            </View>
            <View style={{position: "absolute", bottom: 50, width: "100%", paddingLeft: 20, paddingRight: 20}}>
                <TouchableOpacity style={[gs.button, gs.buttonPrimary]} onPress={() => {navigation.navigate("LoginScreen")}}>
                    <Text style={[{fontSize: 18, fontWeight: "bold", textAlign: "center"}, gs.textColor1]}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[gs.button, gs.ms, {backgroundColor: "#4267B2"}]} onPress={() => {loginWidthFacebook()}}>
                    <Text style={[{fontSize: 18, fontWeight: "bold", textAlign: "center"}, gs.textColor1]}>Sign in with facebook</Text>
                </TouchableOpacity>
                <Text style={[{color: "#fff", textAlign: "center"}, gs.mm]}>Not a member yet?</Text>
            </View>
        </View>
    );
}



const backgroundImage = require("../src/images/splash.jpg");