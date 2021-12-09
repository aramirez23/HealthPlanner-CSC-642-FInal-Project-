import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { DarkTheme, NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import CreateAppointmentScreen from "./screens/CreateAppointmentScreen";
import HistoryBox from "./screens/History";
import AppointmentsBox from "./screens/FutureAppointments";
import AppointmentDetails from "./screens/AppointmentDetails";


const futureData = [
  { id:1,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/19/2021',
    appointmentTime:'10:20 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
    notes:'Annual Physical',
  },
  { id:2,
    appointmentType:'Perscription Renewall',
    appointmentDate:' 01/12/2022',
    appointmentTime:'3:20 PM',
    doctor:'MD Dantonio',
    modality:'Online',
    notes:'Albuterol refill',
  },
  { id:3,
    appointmentType:'Dental Exam',
    appointmentDate:' 01/23/2022',
    appointmentTime:'08:45 AM',
    doctor:'DDS Zhou',
    modality:'In Person',
    notes:'Pain in molars, explorative exam. Hopefully no root canal',
  },
  { id:4,
    appointmentType:'Physical Exam',
    appointmentDate:' 06/05/2022',
    appointmentTime:'11:45 AM',
    doctor:'MD Jimenz',
    modality:'In Person',
    notes:'Mid year check in, better safe than sorry',
  },

];
//test data
const DATA = [
  { id:1,
    appointmentType:'Eye Exam',
    appointmentDate:' 12/05/2021',
    appointmentTime:'09:00 AM',
    doctor:'OD Hovanesian',
    modality:'In Person',
    notes:'Check in for Sciatica, need to get reference for surgery',
  },
  { id:2,
    appointmentType:'Physical Exam',
    appointmentDate:' 11/06/2021',
    appointmentTime:'10:00 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
    notes:'Check in for Sciatica, need to get reference for surgery',
  },
  { id:3,
    appointmentType:'Physical Therapy',
    appointmentDate:' 10/11/2021',
    appointmentTime:'3:30 PM',
    doctor:'Staff',
    modality:'In Person',
    notes:'Sciatica therapy, first session.',
  },
  { id:4,
    appointmentType:'Physical Exam',
    appointmentDate:' 12/05/2020',
    appointmentTime:'8:30 AM',
    doctor:'MD Dantonio',
    modality:'In Person',
    notes:'Annual Physical, bring up knee problems',
  },

];


function HomeScreen({ navigation }) {
  return (
    <View style={styles.appointmentContainer}>
      <FlatList
        data={futureData}
        renderItem={({item})=>(
          <AppointmentsBox>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Appointment Details', {
                item: item,
              });
            }}>
            <Text style={styles.text}>{item.appointmentType}</Text>
            <Text style={styles.text}>{item.appointmentDate}</Text>
            <Text style={styles.text}>{item.appointmentTime}</Text>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text style={styles.text}>Modality: {item.modality}</Text>
            </TouchableOpacity>
          </AppointmentsBox>
        )}
        keyExtractor={item => item.id}//id for props
      />
    </View>
  );
}

function HistoryScreen({navigation}) {
  //flatlist need list with item and id
  return (
    <View style={styles.appointmentContainer}>
      <FlatList
        data={DATA}
        renderItem={({item})=>(
          <HistoryBox>
             <TouchableOpacity onPress={() => {
              navigation.navigate('Appointment Details', {
                item: item,
              });
            }}>
            <Text style={styles.text}>{item.appointmentType}</Text>
            <Text style={styles.text}>{item.appointmentDate}</Text>
            <Text style={styles.text}>{item.appointmentTime}</Text>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text style={styles.text}>Modality: {item.modality}</Text>
            </TouchableOpacity>
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
        <Stack.Screen name="Appointment Details" component={AppointmentDetails} />
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
