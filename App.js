import { StatusBar } from "expo-status-bar";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import Nav from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <Nav />
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}
