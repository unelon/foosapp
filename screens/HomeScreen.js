import { Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { ButtonPrim } from "../src/Elements/ButtonPrim";
import { gs } from "../src/inc/Global";
import { CardUser } from "../src/Components/CardUser";
import { ActivityList } from "../src/Components/ListActivity";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[{flex: 1}, gs.bgcolor2]}>
      <View style={[{flex: 1}, gs.bgcolor2]}>
        <View style={gs.container}>
          <CardUser />
          <ActivityList />
        </View>
      </View>
    </SafeAreaView>
  );
};


