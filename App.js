import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import HistoryBox from "./screens/History";

let p = [0,1,2,3,4,5];

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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
    <View style={styles.historyContainer}>
      {p.map((o,index)=>(
        <HistoryBox>
          
        </HistoryBox>
        // <TouchableOpacity 
        //   key={o}
        //   onPress={ () => {handleSubmit(onSubmit); navigation.dispatch(
        //     CommonActions.reset({
        //       routes: [
        //         { name: 'Home' },
        //       ],
        //     })
        //   );}
        // }>
        //   <HistoryBox
        //     key={o}>
        //     <Text style={styles.historyText}>hello</Text>
        //   </HistoryBox>
        // </TouchableOpacity>
      ))}
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
        <Stack.Screen
          name="Tab Screen"
          component={TabScreen}
          options={{ headerShown: false }}
        />
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
  historyContainer: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: "#0e101c",
  },
  historyText:{
    color: "black",
    textAlign: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
