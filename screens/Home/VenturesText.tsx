import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

const VenturesText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Emprendimientos</Text>
    </View>
  );
};
export default VenturesText;

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
