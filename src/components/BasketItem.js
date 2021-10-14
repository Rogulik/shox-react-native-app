import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/Colors";
import Button from "./Button";

const BasketItem = (props) => {
  const { title, price, image, onViewDetail, onRemoveFromBasket } = props;

  let TouchableCmp =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onViewDetail} useForeground>
          <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title} testID="title">
                {title}
              </Text>
              <Text testID="price" style={styles.price}>
                ${price.toFixed(2)}
              </Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                color={colors.primary}
                title="View Details"
                onPress={onViewDetail}
              />
              <Button
                color={colors.primary}
                title="Remove from Cart"
                onPress={onRemoveFromBasket}
              />
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default BasketItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 80,
    width: "90%",
    margin: 20,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
    fontFamily: "open-sans",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
  },
  content: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "40%",
  },
  imageContainer: {
    height: "100%",
    width: "20%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
});
