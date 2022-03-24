import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../../styles";

export default function Header({ text }) {
  return (
    <View>
      <Text style={globalStyles.headerTextStyle}>{text}</Text>
    </View>
  );
}
