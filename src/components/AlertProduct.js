import React, { useRef } from "react";
import { Animated, StyleSheet, Text } from "react-native";

const AlertProduct = (props) => {
  const { text, propsContainerStyles = {}, fadeAnim } = props;

  return (
    <Animated.View
      style={[
        styles.alertContainer,
        { opacity: fadeAnim },
        propsContainerStyles,
      ]}
    >
      <Text style={styles.alertMessage}>{text}</Text>
    </Animated.View>
  );
};

export default AlertProduct;

const styles = StyleSheet.create({
  alertContainer: {
    height: 50,
    backgroundColor: "green",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  alertMessage: {
    color: "white",
  },
});
