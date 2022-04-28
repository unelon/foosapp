import react, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { gs } from "../inc/Global";
import { ButtonPrim } from "../Elements/ButtonPrim";
import { ScrollView } from "react-native-gesture-handler";
import { useUser } from "../hooks/useUser";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addEmailPasswordUser } = useUser();

  const signUpUser = () => {
    addEmailPasswordUser(email, firstName, password);
  };

  return (
    <View style={[gs.wrapper, gs.bgcolor2, style.loginContainer]}>
      <ScrollView>
        <View style={[gs.container, { marginTop: 100 }]}>
          <Text style={[gs.textColor3, gs.textsm]}>First Name</Text>
          <TextInput
            onChangeText={(value) => setFirstName(value)}
            value={firstName}
            style={[gs.textInput, gs.textColor1, gs.mmBot, gs.borderRadius]}
          ></TextInput>
          <Text style={[gs.textColor3, gs.textsm]}>Last Name</Text>
          <TextInput
            onChangeText={(value) => setLastName(value)}
            value={lastName}
            style={[gs.textInput, gs.textColor1, gs.mmBot, gs.borderRadius]}
          ></TextInput>
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
          <ButtonPrim onPress={signUpUser} title="Sign up" />
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
