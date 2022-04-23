import { Text, View, TouchableOpacity } from "react-native";
import { useUser } from "../src/hooks/useUser";
import { ButtonPrim } from "../src/Elements/ButtonPrim";

export const GameScreen = () => {

  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <Text>
            Game Screen
        </Text>
    </View>
  );
};


