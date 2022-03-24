import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

export default function ServiceCard(props) {
  const { _id, name, service, available, description, price, phone, email } =
    props.data;
  return (
    <View key={_id} style={styles.card}>
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
        <Text style={styles.key}>Price: </Text>
        <Text style={styles.value}>{price || "N/A"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.key}>Phone: </Text>
        <Text style={styles.value}>{phone || "N/A"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.key}>Email: </Text>
        <Text style={styles.value}>{email || "N/A"}</Text>
      </View>
      
      <View>
        <Button
          onPress={() => props.navigation.navigate("Service", props.data)}
          title="Show more..."
          color="black"
        ></Button>
      </View>
    </View>
  );
}

// withNavigation(ServiceCard);
