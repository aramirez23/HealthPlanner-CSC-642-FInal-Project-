import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateAppointment() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [appointmentType, setAppointmentType] = useState([
    {label: 'Physical Exam', value: 'physical exam'},
    {label: 'Eye Exam', value: 'eye exam'},
    {label: 'Dental Exam', value: 'dental exam'},
    {label: 'Lab Tests', value: 'lab tests'},
    {label: 'Perscritpion Renewal', value: 'prescription renewal'},
    {label: 'Physical Therapy', value: 'physical therapy'},
  ]);

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Appointment Type</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={appointmentType}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setAppointmentType}
        />
        <Text style={styles.label}>Doctor</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={appointmentType}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setAppointmentType}
        />
        <Text style={styles.label}>Modality</Text>
        <DropDownPicker
            open={open}
            value={value}
            items={appointmentType}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setAppointmentType}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
