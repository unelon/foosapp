import { ThemeProvider } from "@react-navigation/native";
import { View, Text, Image, ImageBackground} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-web";
import { useUser } from "../src/hooks/useUser";
import { gs } from "../src/inc/Global";
import { ButtonPrim } from "../src/Elements/ButtonPrim";

export default function StartScreen({navigation}) {    
    const {
        loginWidthFacebook
    } = useUser()
    return (
        <View style={[gs.bgcolor1, {flex: 1}]}>     
            <View style={{alignItems: "center", marginTop: 40}}>
                <Image source={require("../src/images/logo.png")} style={{width: 270, height: 184, marginTop: 100}} />
            </View>
            <View style={{position: "absolute", bottom: 50, width: "100%", paddingLeft: 20, paddingRight: 20}}>

                <ButtonPrim title="Log in" navigateTo="LoginScreen"/>    
            
                <TouchableOpacity style={[gs.button, gs.ms, {backgroundColor: "#4267B2"}]} onPress={() => {loginWidthFacebook()}}>
                    <Text style={[{fontSize: 18, fontWeight: "bold", textAlign: "center"}, gs.textColor1]}>Sign in with facebook</Text>
                </TouchableOpacity>
                <Text style={[{color: "#fff", textAlign: "center"}, gs.mmTop]}>Not a member yet?</Text>
                <TouchableOpacity 
                style={{display: "flex", alignItems: "center"}}
                onPress={() => {navigation.navigate("SignupScreen")}}
                >
                    <Text style={[gs.textColor2, gs.pm]}>Sign up now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



const backgroundImage = require("../src/images/splash.jpg");