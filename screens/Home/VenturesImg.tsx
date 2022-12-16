import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Ventures = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
          >
            <Image style={styles.img}
              source={require("../../Img/logo.jpg")} />
          </TouchableOpacity>



        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../../Img/emprendimiento1.jpg")}
          />

        </View>
        <View>
          <Image
            style={styles.img}
            source={require("../../Img/emprendimiento2.jpg")}
          />
        </View>

        <View>
          <Image style={styles.img}
            source={require("../../Img/emprendimiento3.png")} />
        </View>

      </View>
    </ScrollView>
  );
};
export default Ventures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    marginLeft: 10,
  },
  img: {
    width: 250,
    height: 170,
    borderRadius: 8,
    margin: 5,
  },
  play: {
    position: "absolute",
    left: 120,
    top: 75,
  },
  text: {
    color: "white",
    marginLeft: 5,
  },
  str: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    width: "30%",
    borderRadius: 15,
    position: "absolute",
    left: 20,
    top: 10,
  },
  circle: {
    backgroundColor: "white",
    width: "15%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    right: 10,
    top: 10,
  },
  favo: {
    borderColor: "black",
    backgroundColor: "white",
  },
  time: {
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.1)",
    width: "30%",
    borderRadius: 15,
    position: "absolute",
    right: 10,
    height: 30,
    top: 140,
    justifyContent: "center",
  },
  txt: {
    color: "white",
  },
  point: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  txt1: {
    fontSize: 15,
    fontWeight: "bold",
  },
  three: {
    marginLeft: 40,
  },
  users: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  img2: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    color: "gray",
    marginLeft: 10,
  },
});
