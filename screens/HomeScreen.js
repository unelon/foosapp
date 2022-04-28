import { Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { ButtonPrim } from "../src/Elements/ButtonPrim";
import { gs } from "../src/inc/Global";
import { CardUser } from "../src/Components/CardUser";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[{flex: 1}, gs.bgcolor2]}>
      <View style={[{flex: 1}, gs.bgcolor2]}>
        <CardUser />
      </View>
    </SafeAreaView>
  );
};


