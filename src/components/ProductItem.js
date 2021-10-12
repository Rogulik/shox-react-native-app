import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import colors from "../constants/Colors";

const ProductItem = (props) => {
  const {
    title,
    price,
    image,
    onViewDetail,
    onAddToCart,
    id,
    onRemoveFromCart,
  } = props;
  const [isInTheBasket, setIsInTheBasket] = useState(false);
  const basket = useSelector((state) => state.shopping.basket);
  let TouchableCmp =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const isProductInTheBasket = () => {
    return basket.findIndex((product) => product.id === id);
  };

  useEffect(() => {
    isProductInTheBasket() >= 0
      ? setIsInTheBasket(true)
      : setIsInTheBasket(false);
  }, [basket]);
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onViewDetail} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>

            <View style={styles.buttonsContainer}>
              <Button
                color={colors.primary}
                title="View Details"
                onPress={onViewDetail}
              />
              {isInTheBasket ? (
                <Button
                  color={colors.primary}
                  title="Remove from Cart"
                  onPress={onRemoveFromCart}
                />
              ) : (
                <Button
                  color={colors.primary}
                  title="Add to Cart"
                  onPress={onAddToCart}
                />
              )}
            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
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
    fontSize: 18,
    marginVertical: 4,
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
    height: "25%",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "15%",
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
});
