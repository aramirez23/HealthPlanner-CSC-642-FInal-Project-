
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from "expo-constants";


//need to add navigation to appointment details page

export default function AppointmentDetails({ route, navigation }){
    const { item } = route.params;
    return (
        <View>
            <Text style={styles.text}>{item.appointmentType}</Text>
            <Text style={styles.text}>{item.appointmentDate}</Text>
            <Text style={styles.text}>{item.appointmentTime}</Text>
            <Text style={styles.text}>{item.doctor}</Text>
            <Text style={styles.text}>Modality: {item.modality}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#c75416',
        shadowOffset:{width:10, height:10},
        shadowColor: '#fff',
        shadowRadius:5,
        marginHorizontal:4,
        marginVertical:6
    },
    text:{
        color:'white'
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:19
    },
})