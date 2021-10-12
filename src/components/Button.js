import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../constants/Colors";

export default function Button(props) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.primary,
    width: 60,
    height: 40,
  },
  text: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
});
