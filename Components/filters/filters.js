import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState } from "react";
import { View, TextInput, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import {
  faSliders,
  faAngleUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS } from "../../colors";

export default function Filters({
  navigation,
  searchChange,
  availableOnlyChange,
  availableOnly
}) {
  const [showFilters, toggleFilters] = useState(false);
  //const [searchValue, setSearchValue] = useState("");
  // const [availableOnly, setAvailableOnly] = useState(props.availableOnly);

  const renderFilters = () => {
    return showFilters ? (
      <ScrollView style={styles.filters}>
        <Text style={styles.filtersHeader}>Filters</Text>
        <View style={styles.line}></View>
        {/* <Text style={styles.filtersHeader}>Service</Text> */}
        {/* {this.renderServices()} */}
        {/* <View style={styles.line}></View> */}
        {/* <Text style={styles.filtersHeader}>Available only</Text> */}
        <BouncyCheckbox
          value={availableOnly}
          text="Available only"
          onPress={availableOnlyChange}
          fillColor="black"
          textComponent={<Text style={styles.filtersProperty}>Available only</Text>}
        />
        <View style={styles.line}></View>
      </ScrollView>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={searchChange}
          // value={searchValue}
          placeholder="Search..."
          placeholderTextColor={COLORS.lightCream}
          clearButtonMode="always"
        ></TextInput>
        <TouchableOpacity
          onPress={() => toggleFilters(!showFilters)}
          style={styles.filterIcon}
        >
          <FontAwesomeIcon
            icon={showFilters ? faAngleUp : faSliders}
            size={30}
          ></FontAwesomeIcon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Add")}
          style={styles.filterIcon}
        >
          <FontAwesomeIcon icon={faPlus} size={30}></FontAwesomeIcon>
        </TouchableOpacity>
      </View>
      {renderFilters()}
    </View>
  );
}

//export default withNavigation(Filters);
