import { StatusBar } from "expo-status-bar";
import React from "react";
<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAppointment from './screens/CreateAppointment';
=======
import { StyleSheet, Text, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
>>>>>>> 81cfea0196b7e273d169c126af60d0c5eed80eae

import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";

function HomeScreen({ navigation }) {
  return (
<<<<<<< HEAD
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
=======
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
>>>>>>> 81cfea0196b7e273d169c126af60d0c5eed80eae
    </View>
  );
}

function CreateAppointmentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create Appointments!</Text>
    </View>
  );
}

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History!</Text>
    </View>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{
      tabBarActiveTintColor: "#E91E63",
    }}>
      <Tab.Screen name="Create Appointment" component={CreateAppointmentScreen} options={{
          tabBarLabel: 'Create Appointment',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-clock" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create Account" component={CreateAccount} />
<<<<<<< HEAD
        <Stack.Screen name="Create Appointment" component={CreateAppointment} />
=======
        <Stack.Screen
          name="Tab Screen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
>>>>>>> 81cfea0196b7e273d169c126af60d0c5eed80eae
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0e101c",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
