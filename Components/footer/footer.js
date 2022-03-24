import React, { Component } from "react";
import { View, Text } from "react-native";
import globalStyles from "../../styles";

export default class Footer extends Component {
  render() {
    return (
      <View>
        <Text style={globalStyles.footerTextStyle}>
          All rights reserved &copy; Felizia West
        </Text>
      </View>
    );
  }
}
