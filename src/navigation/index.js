import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/Colors";
import ItemsListScreen from "../screens/ItemsListScreen";
import DetailIemScreen from "../screens/DetailItemScreen";
import BasketScreen from "../screens/BasketScreen";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Nav = () => {
  const basket = useSelector((state) => state.shopping.basket);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primary : "",
          },
          headerTintColor: Platform.OS === "android" ? "#fff" : colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: "open-sans",
          },
        }}
      >
        <Stack.Screen
          name="Products"
          component={ItemsListScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Shopping Cart")}
                disabled={basket.length <= 0}
              >
                <FontAwesome
                  name="shopping-basket"
                  size={24}
                  color="white"
                  style={
                    basket.length <= 0 ? styles.disabledIcon : styles.activeIcon
                  }
                ></FontAwesome>
                {basket.length > 0 && (
                  <View style={styles.itemsNumber}>
                    <Text style={styles.basketLength}>{basket.length}</Text>
                  </View>
                )}
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Shopping Cart" component={BasketScreen} />
        <Stack.Screen
          name="Product Details"
          options={({ route }) => ({ title: route.params.itemTitle })}
          component={DetailIemScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  disabledIcon: {
    opacity: 0.6,
  },

  itemsNumber: {
    position: "absolute",
    left: 35,
    top: 15,
    backgroundColor: colors.accent,
    borderRadius: 100,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -20,
  },
  basketLength: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
});

export default Nav;
