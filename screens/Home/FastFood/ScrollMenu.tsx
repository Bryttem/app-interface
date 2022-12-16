import React from "react";
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ProfileFastFood from "./FastFoodMenu";

const Menu = () => {

    return (



        <ScrollView horizontal={true}>
            <View>
                <ProfileFastFood />
            </View>
            <View style={styles.box4} >
                <Image
                    style={styles.foodImage}
                    source={require("../../../Img/menu2.jpg")} />
            </View>
        </ScrollView>

    )
};

export default Menu();

const styles = StyleSheet.create({
    box4: {
        marginTop: 10,
        height: 680,
        marginBottom: 50,
    },
    foodImage: {
        borderRadius: 10,
        width: "88%",
        height: '100%',
        marginHorizontal: 26,
        marginTop: 20,
    },
});