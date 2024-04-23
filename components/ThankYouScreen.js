import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ThankYouScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Obrigado por participar da pesquisa!
        {"\n\n"}
        Aguardamos você no próximo ano!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#372775",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 24,
    textAlign: "center",
  },
});

export default ThankYouScreen;
