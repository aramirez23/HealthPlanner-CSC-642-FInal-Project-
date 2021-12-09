import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
  Share,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

export default function AppointmentDetails({ route, navigation }) {
  const { item } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const onShare = async (text) => {
    try {
      const result = await Share.share({
        message: text,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.element}>
            <Button
              color="#ec5990"
              onPress={() => {
                setModalVisible(!modalVisible);
                onShare(`${item.appointmentType}\n${item.appointmentDate}\n${item.appointmentTime}\n${item.doctor}\n${item.modality}\n${item.notes}`);
                navigation.dispatch(
                  CommonActions.reset({
                    routes: [{ name: "Tab Screen" }],
                  })
                );
              }}
              title={"Confirm"}
            />
          </View>
          <View style={styles.element}>
            <Button
              color="#ec5990"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title={"Cancel"}
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>{item.appointmentType}</Text>
      <Text style={styles.text}>{item.appointmentDate}</Text>
      <Text style={styles.text}>{item.appointmentTime}</Text>
      <Text style={styles.text}>{item.doctor}</Text>
      <Text style={styles.text}>Modality: {item.modality}</Text>
      <Text style={styles.text}>Notes: {item.notes}</Text>
      <Button
        color="#ec5990"
        title={"Share"}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#c75416",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#fff",
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  text: {
    color: "white",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 19,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#0e101c",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  element: {
    marginTop: 10,
    marginBottom: 10,
  },
});
