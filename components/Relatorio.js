import React from "react";
import { View, StyleSheet, Text } from "react-native";
import GraficoPizza from "./GraficoPizza"; 

function Relatorio() {
  const data = [
    { key: "1", name: "Excelente", value: 20 },
    { key: "2", name: "Bom", value: 20 },
    { key: "3", name: "Neutro", value: 15 },
    { key: "4", name: "Ruim", value: 20 },
    { key: "5", name: "Pessimo", value: 20 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Feedback</Text>
      <GraficoPizza data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Relatorio;
