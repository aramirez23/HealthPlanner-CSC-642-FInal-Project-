import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";

export default function CreateAccount({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      username: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
      <View style={styles.doubleInputContainer}>
        <Text style={[styles.doubleLabel, {flex: 2}]}>First Name</Text>
        <Text style={[styles.doubleLabel, {flex: 1}]}>Middle Name</Text>
      </View>
      <View style={styles.doubleInputContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, {flex: 2}, {margin: 5}, {marginLeft: -5}]}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, {flex: 1}, {margin: 5}]}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="middleName"
          rules={{ required: true }}
        />
      </View>
      <Text style={styles.label}>Last Name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          color="#ec5990"
          title="Create Account"
          onPress={() => {
            handleSubmit(onSubmit);
            navigation.dispatch(
              CommonActions.reset({
                routes: [{ name: "Tab Screen" }],
              })
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "white",
    justifyContent: "center",
    margin: 20,
    marginLeft: 0,
  },
  doubleLabel: {
    color: "white",
    justifyContent: "center",
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
    padding: 8,
    backgroundColor: "#0e101c",
  },
  doubleInputContainer: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
