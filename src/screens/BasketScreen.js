import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import colors from "../constants/Colors";
import { clearBasket, removeItemFromShoppingCart } from "../redux/slice";

const BasketScreen = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [basketMessage, setBasketMessage] = useState("The basket is empty");
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

  const order = () => {
    setIsOrdered(true);

    setTimeout(() => {
      dispatch(clearBasket());
      setBasketMessage("The order has been placed!");
      setIsOrdered(false);
    }, 2000);

    setTimeout(() => {
      dispatch(clearBasket());
      setBasketMessage("The order has been placed!");
      setIsOrdered(false);
    }, 4000);
  };
  if (basket.length <= 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text>{basketMessage}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
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
      <Pressable
        style={styles.orderButton}
        disabled={isOrdered}
        onPress={order}
      >
        {isOrdered ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <Text style={styles.orderTitle}>
            Order: $
            {basket
              .reduce((acc, item) => {
                return acc + Number(item.price);
              }, 0)
              .toFixed(2)}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.primary,
    height: 50,
  },
  orderTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
