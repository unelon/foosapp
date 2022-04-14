import react, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { gs } from "../inc/Global";
import { ButtonPrim } from "../Elements/ButtonPrim";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "../hooks/useUser";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithEmailPassword } = useUser();

  const login = () => {
    loginWithEmailPassword(email, password);
  };

  return (
    <View style={[gs.wrapper, gs.bgcolor2, style.loginContainer]}>
      <ScrollView>
        <View style={[gs.container, { marginTop: 100 }]}>
          <Text style={[gs.textColor3, gs.textsm]}>Your Email</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={[gs.textInput, gs.textColor1, gs.mmBot, gs.borderRadius]}
          ></TextInput>
          <Text style={[gs.textColor3, gs.textsm]}>Password</Text>
          <TextInput
            onChangeText={(value) => setPassword(value)}
            value={password}
            secureTextEntry={true}
            style={[gs.textInput, gs.textColor1, gs.mmBot, gs.borderRadius]}
          ></TextInput>
          <ButtonPrim onPress={login} title="Log in" navigateTo="HomeScreen" />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
