import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from "expo-constants";


export default function HistoryBox(props){

    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'#fff',
        shadowOffset:{width:1, height:1},
        shadowColor: '#333',
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },

    cardContent:{
        marginHorizontal:18,
        marginVertical:19
    }

})