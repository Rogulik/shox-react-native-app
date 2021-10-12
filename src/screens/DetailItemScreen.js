import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AlertProduct from "../components/AlertProduct";
import { fadeIn, fadeOut } from "../constants/Animations";
import colors from "../constants/Colors";
import { addItemToBasket, removeItemFromShoppingCart } from "../redux/slice";

const DetailIemScreen = (props) => {
  const {
    route: {
      params: { itemId },
    },
  } = props;

  const [isInTheBasket, setIsInTheBasket] = useState(false);

  const { price, imageUrl, description } = useSelector((state) =>
    state.shopping.products.find((product) => product.id === itemId)
  );

  const basket = useSelector((state) => state.shopping.basket);

  const fadeAnimAdded = useRef(new Animated.Value(0)).current;
  const fadeAnimErased = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addItemToBasket(itemId));
    fadeIn(fadeAnimAdded);
    setTimeout(() => {
      fadeOut(fadeAnimAdded);
    }, 1500);
  };

  const onRemoveFromCart = () => {
    dispatch(removeItemFromShoppingCart(itemId));
    fadeIn(fadeAnimErased);

    setTimeout(() => {
      fadeOut(fadeAnimErased);
    }, 1500);
  };

  const isProductInTheBasket = () => {
    return basket.findIndex((product) => product.id === itemId);
  };

  useEffect(() => {
    if (isProductInTheBasket() >= 0) {
      setIsInTheBasket(true);
    } else {
      setIsInTheBasket(false);
    }
  }, [basket]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonsContainer}>
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
      </ScrollView>
      <AlertProduct
        text="Product has been added to Your basket"
        fadeAnim={fadeAnimAdded}
      />
      <AlertProduct
        text="Product has been removed from Your basket"
        fadeAnim={fadeAnimErased}
        propsContainerStyles={{ backgroundColor: "red" }}
      />
    </View>
  );
};

export default DetailIemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans-bold",
  },
  buttonsContainer: {
    marginVertical: 10,
    alignItems: "center",
    zIndex: 100,
  },
});
