import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAppointment from './screens/CreateAppointment';

import Login from './screens/Login';

export default function App() {
  return (
    //<Login />
    <CreateAppointment />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
