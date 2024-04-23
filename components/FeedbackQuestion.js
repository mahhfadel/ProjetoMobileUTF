import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Importar as imagens
import pessimoIcon from "../assets/icons/pessimo.png";
import ruimIcon from "../assets/icons/ruim.png";
import neutroIcon from "../assets/icons/neutro.png";
import bomIcon from "../assets/icons/bom.png";
import excelenteIcon from "../assets/icons/excelente.png";

function FeedbackQuestion() {
  const navigation = useNavigation();

  const handleFeedback = (rating) => {
    
    console.log("Rating:", rating);
    navigation.navigate("ThankYou");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>O que você achou do Carnaval 2024?</Text>
        </View>
        <View style={styles.feedbackOptionsContainer}>
          <TouchableOpacity onPress={() => handleFeedback("Péssimo")}>
            <View style={styles.feedbackOption}>
              <Image source={pessimoIcon} style={styles.icon} />
              <Text style={styles.optionText}>Péssimo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFeedback("Ruim")}>
            <View style={styles.feedbackOption}>
              <Image source={ruimIcon} style={styles.icon} />
              <Text style={styles.optionText}>Ruim</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFeedback("Neutro")}>
            <View style={styles.feedbackOption}>
              <Image source={neutroIcon} style={styles.icon} />
              <Text style={styles.optionText}>Neutro</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFeedback("Bom")}>
            <View style={styles.feedbackOption}>
              <Image source={bomIcon} style={styles.icon} />
              <Text style={styles.optionText}>Bom</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFeedback("Excelente")}>
            <View style={styles.feedbackOption}>
              <Image source={excelenteIcon} style={styles.icon} />
              <Text style={styles.optionText}>Excelente</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },
  feedbackOptionsContainer: {
    alignItems: "center",
  },
  feedbackOption: {
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 90,
    marginBottom: 5,
  },
  optionText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
  },
});

export default FeedbackQuestion;
