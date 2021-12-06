import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from "expo-constants";


//need to add navigation to appointment details page
export default function HistoryBox(props){
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <View >
                        {props.children}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#1d2738',
        shadowOffset:{width:10, height:10},
        shadowColor: '#fff',
        shadowRadius:5,
        marginHorizontal:4,
        marginVertical:6
    },

    cardContent:{
        marginHorizontal:18,
        marginVertical:19
    },
})