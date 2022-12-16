import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const FastFoodText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Comidas Rápidas</Text>
    </View>
  );
};
export default FastFoodText;

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
