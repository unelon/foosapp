import { Text, View, TouchableOpacity } from "react-native";
import { useUser } from "../src/hooks/useUser";

export const HomeScreen = () => {
  const {
    user: { name },
  } = useUser();
  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <Text style={{ fontSize: 40 }}>velkommen {name}</Text>
      <View style={{ bottom: 50, position: "absolute" }}>
        <Logout />
      </View>
    </View>
  );
};

function Logout() {
  const { logout } = useUser();
  return (
    <View style={{ backgroundColor: "red" }}>
      <TouchableOpacity onPress={logout}>
        <Text style={{ padding: 10, fontSize: 30, color: "white" }}>
          logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
