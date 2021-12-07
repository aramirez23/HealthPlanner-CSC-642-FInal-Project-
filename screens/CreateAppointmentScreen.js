import React, {useState, useCallback} from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal, Alert } from "react-native";
import Constants from "expo-constants";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CommonActions } from "@react-navigation/native";


export default function CreateAppointmentScreen({navigation}) {
  const [openAppointment, setAppointment] = useState(false);
  const [openDoctors, setDoctors] = useState(false);
  const [openModality, setModality] = useState(false);
  const [avalue, setAValue] = useState(null);
  const [dvalue, setDValue] = useState(null);
  const [mvalue, setMValue] = useState(null);

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
  const [date, setDate] = useState(new Date());
  new Date()
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

  const [text, onChangeText] = React.useState('notes');

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
        <Text style={{ fontSize: 20 }}>Your {mvalue} {avalue} appointment with {dvalue} at {date.toString()} is ready to schedule.
        Press confirm to schedule, or cancel to edit your appointment further.</Text>
        <View style={styles.element}>
          <Button
            color="#ec5990"
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
          <View style={styles.element}>
            <Button
            color="#ec5990"
            onPress={() => {setModalVisible(!modalVisible)}}
            title={'Cancel'}/>
          </View>
        </View>
      </Modal>
      <View visible={!modalVisible}>
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          placeholder = 'Appointment Type'
          open={openAppointment}
          onOpen={onAppointmentTypeOpen}
          value={avalue}
          items={appointmentType}
          setOpen={setAppointment}
          setValue={setAValue}
          setItems={appointmentValue}
          style={styles.element}/>
        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          placeholder = 'Doctor'
          open={openDoctors}
          onOpen={onDoctorsOpen}
          value={dvalue}
          items={doctors}
          setOpen={setDoctors}
          setValue={setDValue}
          setItems={doctorValue}
          style={styles.element}/>
        <DropDownPicker
          zIndex={1000}
          zIndexInverse={3000}
          placeholder = 'Modality'
          open={openModality}
          onOpen={onModalityOpen}
          value={mvalue}
          items={modality}
          setOpen={setModality}
          setValue={setMValue}
          setItems={modalityValue}
          style={styles.element}/>
      <View style={styles.element} zIndex={100}>
        <Button
          onPress={showDatepicker} 
          color="#ec5990"
          title="Select Date" />
      </View>
      <View style={styles.element} zIndex={100}>
        <Button
          onPress={showTimepicker}
          color="#ec5990"
          title="Select Time" />
      </View>
      <Text style={styles.label}>{date.toString()}</Text>
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
          numberOfLines={5}
          onChangeText={text => onChangeText(text)}
          value={text}
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
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom:20,
  },
  modalButton:{
    height: 100,
    width: 100,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
    //backgroundColor: 'rgba(0,0,0,.6)',
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
