
import React ,{useState, useCallback, useRef, useEffect} from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Modal, Alert, Platform, } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Health-Planner ",
        body: 'You have an in person Eye Exam scheduled for 03/05/2021 at 09:00 AM',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 }
    //   trigger: { hour: 21,
    //     minute: 0, repeats: true},
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

export default function AppointmentDetails({ route, navigation }){
    const { item } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
        });

        return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.modalView}>
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
            <Text style={styles.text}>{item.appointmentType}</Text>
                <Text style={styles.text}>{item.appointmentDate}</Text>
                <Text style={styles.text}>{item.appointmentTime}</Text>
                <Text style={styles.text}>{item.doctor}</Text>
                <Text style={styles.text}>Modality: {item.modality}</Text>
                <Text style={styles.text}>Notes: {item.notes}</Text>
                <Button
                    color="#ec5990"
                    title={'Share'}
                    onPress={() => {
                    setModalVisible(!modalVisible)
                }}/>
                <Button title="Press to schedule a notification" onPress={async () => {await schedulePushNotification();}}
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
    justifyContent:'center',
  },
  text: {
    color: "white",
    alignItems: 'center'
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 19,
    justifyContent:'center'
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
      justifyContent:'center',
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  element: {
    marginTop: 10,
    marginBottom: 10,
  },
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
