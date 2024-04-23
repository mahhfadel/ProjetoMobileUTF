// components/Header.js
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


function Header({ title, onPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPress}>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://i.imgur.com/vI1GgcX.png",
          }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#2B1D62",
    height: 75,
    position: "absolute", 
    top: 0, 
    left: 0, 
    right: 0, 
  },
  logo: {
    width: 34,
    height: 34,
  },
  headerText: {
    color: "#FFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 30,
    marginLeft: 10,
    flex: 1, 
  },
});

export default Header;
