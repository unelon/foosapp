import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { gs } from "../src/inc/Global";

// Import screens
import StartScreen from "./StartScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { useUser } from "../src/hooks/useUser";
import { HomeScreen } from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator

const home = "Home";
const leagues = "Leagues";
const myProfile = "My Profile";

function TabNavigation() {
  return (
    <Tab.Navigator
    initialRouteName={HomeScreen}
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: "#00C695",
      tabBarActiveBackgroundColor: "#171F23",
      tabBarInactiveBackgroundColor: "#171F23",
      tabBarInactiveTintColor: 'grey',
      headerShown: false,
      tabBarLabelStyle: { paddingBottom: 30, paddingTop: 0, fontSize: 15 },
      tabBarStyle: { paddingBottom: 0, height: 80, borderTopWidth: 4, borderTopColor: '#171F23'},
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === home) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === leagues) {
            iconName = focused ? "search" : "search-outline";
          } else if (rn === myProfile) {
            iconName = focused ? "pizza" : "pizza-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={home} component={HomeScreen} />
      <Tab.Screen name={leagues} component={HomeScreen} />
      <Tab.Screen name={myProfile} component={HomeScreen} />
    </Tab.Navigator>
  );
}

// Navigator
function StartContainer() {
  const {
    user: { state },
    loading,
  } = useUser();
  console.log(state);
  if (state === "initilizing" || loading) return <Loading />;
  if (state === "loggedIn") {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home Screen">
          <Stack.Screen
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
            tabBarStyle={{}}
            name="HomeScreen"
            component={TabNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            cardStyle: { backgroundColor: "#fff" },
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login to FOOSAPP",
            presentation: "modal",
            headerTintColor: "white",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#212D33",
              shadowColor: "transparent",
            },
            headerBackImage: () => (
              <Image
                source={require("../src/images/close-white.png")}
                style={{ width: 14, height: 14, marginLeft: 20 }}
              />
            ),
            headerBackTitle: " ",
            cardStyle: { backgroundColor: "#fff" },
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            title: "Sign up to FOOSAPP",
            presentation: "modal",
            headerTintColor: "white",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#212D33",
              shadowColor: "transparent",
            },
            headerBackImage: () => (
              <Image
                source={require("../src/images/close-white.png")}
                style={{ width: 14, height: 14, marginLeft: 20 }}
              />
            ),
            headerBackTitle: " ",
            cardStyle: { backgroundColor: "#fff" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StartContainer;

function Loading() {
  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "white",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
}
