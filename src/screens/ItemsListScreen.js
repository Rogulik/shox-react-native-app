import React, { useRef } from "react";
import { FlatList, StyleSheet, View, Text, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AlertProduct from "../components/AlertProduct";
import ProductItem from "../components/ProductItem";
import { fadeIn, fadeOut } from "../constants/Animations";
import { addItemToBasket, removeItemFromShoppingCart } from "../redux/slice";

const ItemsListScreen = (props) => {
  const products = useSelector((state) => state.shopping.products);
  const { navigation } = props;
  const onViewDetail = (id, title) => {
    navigation.navigate("Product Details", {
      itemId: id,
      itemTitle: title,
    });
  };
  const fadeAnimAdded = useRef(new Animated.Value(0)).current;
  const fadeAnimErased = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const onAddToCart = (id) => {
    dispatch(addItemToBasket(id));
    fadeIn(fadeAnimAdded);

    setTimeout(() => {
      fadeOut(fadeAnimAdded);
    }, 1500);
  };

  const onRemoveFromCart = (id) => {
    dispatch(removeItemFromShoppingCart(id));
    fadeIn(fadeAnimErased);

    setTimeout(() => {
      fadeOut(fadeAnimErased);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { title, price, imageUrl, id } }) => (
          <ProductItem
            title={title}
            price={price}
            image={imageUrl}
            id={id}
            onViewDetail={() => onViewDetail(id, title)}
            onAddToCart={() => onAddToCart(id)}
            onRemoveFromCart={() => onRemoveFromCart(id)}
          />
        )}
      />
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

export default ItemsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
