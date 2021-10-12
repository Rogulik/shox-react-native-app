import { Animated } from "react-native";

export const fadeIn = (ref) => {
  Animated.timing(ref, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();
};

export const fadeOut = (ref) => {
  Animated.timing(ref, {
    toValue: 0,
    duration: 200,
    useNativeDriver: true,
  }).start();
};
