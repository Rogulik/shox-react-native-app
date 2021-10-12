import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import { removeItemFromShoppingCart } from "../redux/slice";

const BasketScreen = (props) => {
  const { navigation } = props;
  const basket = useSelector((state) => state.shopping.basket);
  const onViewDetail = (id, title) => {
    navigation.navigate("Product Details", {
      itemId: id,
      itemTitle: title,
    });
  };
  const dispatch = useDispatch();

  const onRemoveFromBasket = (id) => {
    dispatch(removeItemFromShoppingCart(id));
  };
  if (basket.length <= 0) {
    return (
      <View style={styles.container}>
        <Text>The basket is empty</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={basket}
        renderItem={({ item: { title, price, imageUrl, id } }) => (
          <BasketItem
            title={title}
            price={price}
            image={imageUrl}
            onViewDetail={() => onViewDetail(id, title)}
            onRemoveFromBasket={() => onRemoveFromBasket(id)}
          />
        )}
      />
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
