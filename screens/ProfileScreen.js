import { Text, View, TouchableOpacity } from "react-native";
import { useUser } from "../src/hooks/useUser";
import { ButtonPrim } from "../src/Elements/ButtonPrim";

export const ProfileScreen = () => {
  return (
    <Logout />
  );
};

function Logout() {
  const { logout } = useUser();
  return (
    <View style={{display: "flex", height: "100%", justifyContent: "flex-end"}}>
      <ButtonPrim onPress={logout} title="Log out">
      </ButtonPrim>
    </View>
  );
}
