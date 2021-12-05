import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAppointment from './screens/CreateAppointment';

import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
          color="#ec5990"
          title="Create Appointment"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                routes: [{ name: "Create Appointment" }],
              })
            );
          }}
        />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
        <Stack.Screen name="Create Appointment" component={CreateAppointment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
