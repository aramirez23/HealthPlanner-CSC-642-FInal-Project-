import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import CreateAppointmentScreen from "./screens/CreateAppointmentScreen";
import HistoryBox from "./screens/History";
import AppointmentsBox from "./screens/FutureAppointments";


const futureData = [
  { id:1,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/19/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:2,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/19/2021',
    appointmentTime:'10:20 PM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:3,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/19/2022',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:4,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/19/2121',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },

];
//test data
const DATA = [
  { id:1,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/06/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:2,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/06/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:3,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/06/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },
  { id:4,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/06/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
  },

];


function HomeScreen({ navigation }) {
  return (
    <View style={styles.appointmentContainer}>
      <FlatList
        data={futureData}
        renderItem={({item})=>(
          <AppointmentsBox>
            <Text style={styles.text}>{item.appointmentType}</Text>
            <Text style={styles.text}>{item.appointmentDate}</Text>
            <Text style={styles.text}>{item.appointmentTime}</Text>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text style={styles.text}>Modality: {item.modality}</Text>
          </AppointmentsBox>
        )}
        keyExtractor={item => item.id}//id for props
      />
    </View>
  );
}

function HistoryScreen() {
  //flatlist need list with item and id
  return (
    <View style={styles.appointmentContainer}>
      <FlatList
        data={DATA}
        renderItem={({item})=>(
          <HistoryBox>
            <Text style={styles.text}>{item.appointmentType}</Text>
            <Text style={styles.text}>{item.appointmentDate}</Text>
            <Text style={styles.text}>{item.appointmentTime}</Text>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text style={styles.text}>Modality: {item.modality}</Text>
          </HistoryBox>
        )}
        keyExtractor={item => item.id}//id for props
      />
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
  appointmentContainer: {
    flex: 1,
    flexDirection: 'row',
    padding:30,
    justifyContent:'space-around',
    alignItems:'flex-start',
    backgroundColor: "#0e101c",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
