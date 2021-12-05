import React, {useState, useCallback} from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CreateAppointmentScreen({navigation}) {
  const [openAppointment, setAppointment] = useState(false);
  const [openDoctors, setDoctors] = useState(false);
  const [openModality, setModality] = useState(false);
  const [value, setValue] = useState(null);

  const [appointmentType, appointmentValue] = useState([
    {label: 'Physical Exam', value: 'physical exam'},
    {label: 'Eye Exam', value: 'eye exam'},
    {label: 'Dental Exam', value: 'dental exam'},
    {label: 'Lab Tests', value: 'lab tests'},
    {label: 'Perscritpion Renewal', value: 'prescription renewal'},
    {label: 'Physical Therapy', value: 'physical therapy'},
  ]);

  const [doctors, doctorValue] = useState([
    {label: 'MD Dantonio', value: 'MD Dantonio'},
    {label: 'MD Ribao', value: 'MD Ribao'},
    {label: 'MD Jimenz', value: 'MD Jimenz'},
    {label: 'DDS Zhou', value: 'DDS Zhou'},
    {label: 'DMD Leigh', value: 'DMD Leigh'},
    {label: 'OD Salzberg', value: 'OD Salzberg'},
    {label: 'OD Hovanesian', value: 'OD Hovanesian'},
    {label: 'Staff', value: 'Staff'},
  ]);

  const [modality, modalityValue] = useState([
    {label: 'In Person', value: 'In Person'},
    {label: 'Online', value: 'Online'},
    {label: 'Phone Consultation', value: 'Phone Consultation'},
  ]);

  const onAppointmentTypeOpen = useCallback(() => {
    setDoctors(false);
    setModality(false);
  }, []);

  const onDoctorsOpen = useCallback(() => {
    setAppointment(false);
    setModality(false);
  }, []);

  const onModalityOpen = useCallback(() => {
    setAppointment(false);
    setDoctors(false);
  }, []);

  //date/time picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [text, onChangeText] = React.useState("Notes");


  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible)
              navigation.dispatch(
                CommonActions.reset({
                  routes: [{ name: "Tab Screen" }],
                })
              );
            }}
          title={'Confirm'}/>
        </View>
      </Modal>
      <View visible={!modalVisible}>
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          placeholder = 'Appointment Type'
          open={openAppointment}
          onOpen={onAppointmentTypeOpen}
          value={value}
          items={appointmentType}
          setOpen={setAppointment}
          setValue={setValue}
          setItems={appointmentValue}
          style={styles.element}/>
        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          placeholder = 'Doctor'
          open={openDoctors}
          onOpen={onDoctorsOpen}
          value={value}
          items={doctors}
          setOpen={setDoctors}
          setValue={setValue}
          setItems={doctorValue}
          style={styles.element}/>
        <DropDownPicker
          zIndex={1000}
          zIndexInverse={3000}
          placeholder = 'Modality'
          open={openModality}
          onOpen={onModalityOpen}
          value={value}
          items={modality}
          setOpen={setModality}
          setValue={setValue}
          setItems={modalityValue}
          style={styles.element}/>
      <View style={styles.element} zIndex={100}>
        <Button
          onPress={showDatepicker} 
          color="#ec5990"
          borderRadius={10}
          title="Select Date" />
      </View>
      <View style={styles.element} zIndex={100}>
        <Button
          onPress={showTimepicker}
          borderRadius={10}
          color="#ec5990"
          title="Select Time" />
      </View>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}/>
        )}
      </View>
      <View>
        <TextInput
          multiline
          numberOfLines={15}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder='Notes'
          textAlign={'justify'}
          textAlignVertical={'top'}
          style={{
            padding:10,
            marginTop:10,
            marginBottom: 10,
            backgroundColor:'white',
            flex:0,
          }}/>
      </View>
      <View style={styles.element}>
        <Button 
          onPress={showTimepicker}
          color="#ec5990"
          onPress={() => setModalVisible(true)}
          title="Submit" />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    //backgroundColor: "#0e101c",
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  element: {
    marginTop: 10,
    marginBottom: 10,
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
