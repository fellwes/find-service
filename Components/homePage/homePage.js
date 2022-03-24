import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../../styles";
import ServiceCard from "../serviceCard/serviceCard";
import Filters from "../filters/filters";
import { useIsFocused } from "@react-navigation/native";
import Header from "../header/header";
import Footer from "../footer/footer";

export const API_URL = "https://limitless-brushlands-25944.herokuapp.com/api/workers";

export default function HomePage({ navigation }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  useEffect(() => {
    const trimmedSearchString = trimLowerCase(searchString);
    let newData = data;
    if (trimmedSearchString) {
      newData = newData.filter(
        (ad) =>
          trimLowerCase(ad.name).includes(trimmedSearchString) ||
          trimLowerCase(ad.description).includes(trimmedSearchString) ||
          trimLowerCase(ad.service).includes(trimmedSearchString)
      );
    }
    if (availableOnly) {
      newData = newData.filter((ad) => ad.available);
    }

    setFilteredData(newData);
  }, [searchString, availableOnly]);

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      });
  };

  const trimLowerCase = (string = "") => string.toLowerCase().trim();

  const renderContent = () => {
    const content = filteredData.map((ad, index) => (
      <ServiceCard data={ad} key={index} navigation={navigation} />
    ));

    return <ScrollView>{content}</ScrollView>;
  };

  return (
    <View style={globalStyles.container}>
      <Header text="Find what you need" />
      <View style={{ margin: 10, display: "flex", flex: 1 }}>
        <Filters
          navigation={navigation}
          searchChange={setSearchString}
          availableOnlyChange={setAvailableOnly}
          services={[...new Set(filteredData.map((ad) => ad.service))]}
          availableOnly={availableOnly}
        />
        <View style={globalStyles.contentStyle}>{renderContent()}</View>
      </View>
      <Footer />
    </View>
  );
}
