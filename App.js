import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./components/Header";
import Action from "./components/Action";
import FeedbackQuestion from "./components/FeedbackQuestion";
import ThankYouScreen from "./components/ThankYouScreen";
import Relatorio from "./components/Relatorio";
import GraficoPizza from "./components/GraficoPizza";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const handleHeaderPress = () => {
    
  };

  const handleActionPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Header title="Carnaval" onPress={handleHeaderPress} />
      <View style={styles.actionsContainer}>
        <Action
          title="Modificar"
          source="https://i.imgur.com/9iSW1Ku.png"
          onPress={() => handleActionPress("Modificar")}
        />
        <Action
          title="Coletar dados"
          source="https://i.imgur.com/XxuuByv.png"
          onPress={() => handleActionPress("FeedbackQuestion")}
        />
        <Action
          title="Relatório"
          source="https://i.imgur.com/oGv3rxy.png"
          onPress={() => handleActionPress("Relatório")}
        />
      </View>
    </View>
  );
}

function App() {
  const [fontsLoaded] = useFonts({
    "AveriaLibre-Regular": require("./assets/fonts/AveriaLibre-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FeedbackQuestion" component={FeedbackQuestion} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
        <Stack.Screen name="Relatório" component={Relatorio} /> 
        <Stack.Screen name="GraficoPizza" component={GraficoPizza} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    justifyContent: "center",
    alignItems: "center",
  },
  actionsContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default App;
