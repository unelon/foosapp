import { Text, View, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useUser } from "../src/hooks/useUser";
import { ButtonPrim } from "../src/Elements/ButtonPrim";
import { gs } from "../src/inc/Global";

export const HomeScreen = () => {
  const {
    user: { name },
  } = useUser();
  return (
    <SafeAreaView style={[{flex: 1}, gs.bgcolor2]}>
      <View style={[{flex: 1}, gs.bgcolor2]}>
        <View style={gs.container}>
          <View style={[gs.containerColor, gs.borderRadius, gs.ps]}>
            <Image source={{uri: "https://randomuser.me/api/portraits/women/67.jpg"}} style={{height: 50, width: 50, borderRadius: 100}}/>
            <View>
              <Text style={gs.textColor1}>Sanne Petersen</Text>
              <View>
                <Text style={gs.textColor1}>Recent results:</Text>
              </View>
            </View>
          </View>    
        </View>
      </View>
    </SafeAreaView>
  );
};


