import React from "react";
import { View, StyleSheet } from "react-native";
import { VictoryLegend, VictoryPie } from "victory-native";

function GraficoPizza({ data }) {
  console.log("Dados do gráfico:", data); 

  const chartData = data.map((item) => ({
    x: item.name,
    y: item.value,
  }));

  return (
    <View style={[styles.container, { justifyContent: "center" }]}>
      <View style={styles.chartContainer}>
        <VictoryPie
          data={chartData}
          colorScale={["#F1CE7E", "#6994FE", "#5FCDA4", "#EA7288", "#53D8D8"]}
          innerRadius={65}
          labels={({ datum }) => `${datum.x}: ${datum.y}`}
          labelRadius={90}
          style={{ labels: { fontSize: 15, fill: "white" } }} 
        />
      </View>
      <View style={[styles.legendContainer, { justifyContent: "center" }]}>
        <VictoryLegend
          orientation="horizontal"
          gutter={22}
          style={{border: {stroke: "white"}, title: {fontSize: 20}, fill: "white", labels: {fill: "white"}}}          
          data={[
            { name: "Excelente", symbol: { fill: "#F1CE7E" } },
            { name: "Bom", symbol: { fill: "#6994FE" } },
            { name: "Neutro", symbol: { fill: "#5FCDA4" } },
            { name: "Ruim", symbol: { fill: "#EA7288" } },
            { name: "Pessímo", symbol: { fill: "#53D8D8" } }
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default GraficoPizza;
