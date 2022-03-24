import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Components/homePage/homePage";
import ServiceContent from "./Components/serviceContent/serviceContent";
import AddService from "./Components/addService/addService";

const Stack = createStackNavigator();

function StackComponent() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
      <Stack.Screen
        name="Service"
        component={ServiceContent}
        options={{ title: "Service" }}
      ></Stack.Screen>
      <Stack.Screen
        name="Add"
        component={AddService}
        options={{ title: "Add service" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
// const RootStack = createStackNavigator(
//   {
//     Home: HomePage,
//     Info: InfoPage,
//     About: AboutPage,
//     Service: ServicePage,
//     Add: AddServicePage
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

//const AppContainer = createAppContainer();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StackComponent />
      </NavigationContainer>
    );
  }
}
