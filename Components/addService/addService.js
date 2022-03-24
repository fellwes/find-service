import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { COLORS } from "../../colors";
import globalStyles from "../../styles";
import addServiceStyles from "./styles";
import RadioGroup from "react-native-radio-buttons-group";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../header/header";
import Footer from "../footer/footer";
import { API_URL } from "../homePage/homePage";

export default function AddService({ navigation }) {
  const buttonStyle = {
    color: "black",
    borderColor: "black",
    labelStyle: { fontSize: 16 },
  };

  const radioButtonsData = [
    {
      id: 1,
      label: "Yes",
      value: true,
      selected: true,
      ...buttonStyle,
    },
    {
      id: 2,
      label: "No",
      value: false,
      selected: false,
      ...buttonStyle,
    },
  ];

  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [available, setAvailable] = useState(true);
  const [availableButtons, setAvailableButtons] = useState(radioButtonsData);
  const [submitEnabled, enableSubmit] = useState(false);
  const [cancelEnabled, enableCancel] = useState(true);

  const radioChange = (radioData) => {
    setAvailableButtons(radioData);
    const { value } = radioData.find((radio) => radio.selected);
    setAvailable(value);
  };

  useEffect(() => {
    enableSubmit(!!(name && service && email && phone));
  }, [name, service, phone, email]);

  const submit = () => {
    enableSubmit(false);
    enableCancel(false);
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        service,
        description,
        price,
        phone,
        email,
        available,
      }),
    }).then(() => {
      enableSubmit(true);
      enableCancel(true);
      navigation.navigate("Home");
    });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          style={addServiceStyles.formContainer}
        >
          <Header text="Enter details" />
          <Text style={addServiceStyles.label}>Name:</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={addServiceStyles.input}
            placeholder="Required"
            placeholderTextColor={COLORS.lightCream}
          ></TextInput>
          <Text style={addServiceStyles.label}>Service:</Text>
          <TextInput
            value={service}
            onChangeText={setService}
            style={addServiceStyles.input}
            placeholder="Required"
            placeholderTextColor={COLORS.lightCream}
          ></TextInput>
          <Text style={addServiceStyles.label}>Description:</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            multiline
            maxLength={200}
            style={[addServiceStyles.input, { height: 80 }]}
          ></TextInput>
          <Text style={addServiceStyles.label}>Price:</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            style={addServiceStyles.input}
          ></TextInput>

          <Text style={addServiceStyles.label}>Phone:</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={addServiceStyles.input}
            placeholder="Required"
            placeholderTextColor={COLORS.lightCream}
          ></TextInput>
          <Text style={addServiceStyles.label}>Email:</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={addServiceStyles.input}
            placeholder="Required"
            placeholderTextColor={COLORS.lightCream}
          ></TextInput>
          <Text style={addServiceStyles.label}>Available:</Text>
          <RadioGroup
            radioButtons={availableButtons}
            onPress={radioChange}
            containerStyle={{
              alignSelf: "flex-start",
              alignItems: "flex-start",
            }}
          />
          <View style={addServiceStyles.buttonsContainer}>
            <TouchableOpacity
              disabled={!cancelEnabled}
              onPress={() => navigation.navigate("Home")}
            >
              <View
                style={[
                  addServiceStyles.button,
                  cancelEnabled ? null : addServiceStyles.disabled,
                ]}
              >
                <Text style={addServiceStyles.label}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity disabled={!submitEnabled} onPress={submit}>
              <View
                style={[
                  addServiceStyles.button,
                  submitEnabled ? null : addServiceStyles.disabled,
                ]}
              >
                <Text style={addServiceStyles.label}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Footer />
    </View>
  );
}
