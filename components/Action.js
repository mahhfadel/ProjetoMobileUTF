// Action.js
import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

function Action({ title, source, onPress }) {
  return (
    <TouchableOpacity style={styles.action} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={{ uri: source }}
        style={styles.image}
      />
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: "#312464",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 10,
    width: "50%",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
  },
  actionText: {
    color: "#FFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 16,
    marginTop: 10,
  },
});

export default Action;
