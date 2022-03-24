import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Linking } from "react-native";
import globalStyles from "../../styles";
import styles from "./styles";
import {
  faPhone,
  faEnvelope,
  faCommentSms,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function ServiceContent({ navigation, route }) {
  const { name, service, available, price, email, phone, description } =
    route.params;

  const call = () => {
    Linking.openURL(`tel:${phone || "+381669439461"}`);
  };

  const openEmail = () => {
    Linking.openURL(`mailto:${email || "mihailo.matejic@gmail.com"}`);
  };

  const sendSms = () => {
    Linking.openURL(`sms:${phone || "+381669439461"}`);
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView style={styles.serviceContainer}>
        <Header text="Service details" />
        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <Text style={styles.key}>Name: </Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Service: </Text>
            <Text style={styles.value}>{service}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Available: </Text>
            <Text style={styles.value}>{available ? "Yes" : "No"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Description: </Text>
            <Text style={styles.value}>{description || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.key}>Price: </Text>
            <Text style={styles.value}>{price || "N/A"}</Text>
          </View>
        </View>
        <Header text="Contact" />
        <View style={styles.detailsContainer}>
          <View style={styles.contactRow}>
            <TouchableOpacity onPress={call} style={styles.contactIcon}>
              <FontAwesomeIcon icon={faPhone} size={30}></FontAwesomeIcon>
            </TouchableOpacity>
            <Text style={styles.contactValue}>{phone || "+381669439461"}</Text>
          </View>

          <View style={styles.contactRow}>
            <TouchableOpacity onPress={openEmail} style={styles.contactIcon}>
              <FontAwesomeIcon icon={faEnvelope} size={30}></FontAwesomeIcon>
            </TouchableOpacity>
            <Text style={styles.contactValue}>
              {email || "mihailo.matejic@gmail.com"}
            </Text>
          </View>
          <View style={styles.contactRow}>
            <TouchableOpacity onPress={sendSms} style={styles.contactIcon}>
              <FontAwesomeIcon icon={faCommentSms} size={30}></FontAwesomeIcon>
            </TouchableOpacity>
            <Text style={styles.contactValue}>{phone || "+381669439461"}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
