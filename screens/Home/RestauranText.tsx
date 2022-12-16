import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const RestauranText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Restaurantes</Text>
    </View>
  );
};
export default RestauranText;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
