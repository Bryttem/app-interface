import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import VenturesText from "./Home/VenturesText";
import VenturesImg from "./Home/VenturesImg";
import RestauranText from "./Home/RestauranText";
import RestaurantImg from "./Home/RestaurantImg";
import FastFoodText from "./Home/FastFoodText";
import FastFoodImg from "./Home/FastFoodImg";


const Home = () => {

    return (
        <ScrollView>
            <View>
                <VenturesText />
                <VenturesImg />
                <RestauranText />
                <RestaurantImg />
                <FastFoodText />
                <FastFoodImg />
            </View>
        </ScrollView>

    )
};

export default Home;


