import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ProfileFastFood = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.box1}>
                <View>
                    <Image
                        style={styles.image}
                        source={require("../../../Img/fas4.jpg")} />
                </View>
                <View style={styles.boxEdit}>
                    <Text style={styles.textEdit}>
                        Edit Profile
                    </Text>
                </View>
            </View>

            <View style={styles.box3}>
                <Text style={styles.textMichelle}>
                    Pizza Hut
                </Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.textMichelle2}>
                    Lo mejor de la pizza solo en pizza hut
                </Text>
            </View>

            <View style={styles.boxSocialMedia}>

                <Text style={styles.textMichelle2}>
                    Publicaciones
                </Text>
                <Text style={styles.textMichelle2}>
                    Seguidores
                </Text>

            </View>

            <View style={styles.boxSocialMedia}>

                <Text style={styles.numberSocialMedia}>
                    3
                </Text>
                <Text style={styles.numberSocialMedia}>
                    55K
                </Text>

            </View>

            <View style={styles.line}></View>
            <View style={styles.boxVideoRecipe}>
                <View style={styles.boxVideo}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("FastFood2")}
                    >
                        <Text style={styles.textVideo}>
                            Publicaciones
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxVideoRecipe}>
                </View>


                <View style={styles.boxRecipe}>
                    <Text style={styles.textRecipe}>
                        Menu
                    </Text>
                </View>
            </View>

            <View style={styles.box4} >
                <Image
                    style={styles.foodImage}
                    source={require("../../../Img/menu2.jpg")} />
            </View>
        </ScrollView>
    )
}
export default ProfileFastFood;

const styles = StyleSheet.create({
    box1: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 26,
    },
    box3: {
        marginHorizontal: 26,
    },
    box4: {
        marginTop: 10,
        height: 660,
        marginBottom: 90,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 60,
    },
    boxEdit: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "#FF464B",
        width: 110,
        marginTop: '25%',
    },
    textEdit: {
        color: '#FF464B',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
    },
    textMichelle: {
        color: "black",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
    },
    textMichelle2: {
        color: "#c6c6c6",
        fontSize: 17,
        marginTop: 10,
        fontWeight: "bold",
    },
    boxSocialMedia: {
        flexDirection: 'row',
        marginHorizontal: 26,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    numberSocialMedia: {
        marginHorizontal: 26,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: "bold",
    },
    line: {
        marginTop: 15,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#c6c6c6",
    },
    boxVideoRecipe: {
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 10,
        justifyContent: 'space-around',
        textAlign: 'center',
    },
    boxVideo: {
        marginHorizontal: 10,
        paddingLeft: 5,
        padding: 5,
        textAlign: 'center',
        justifyContent: 'center',
        width: "41%",

    },
    textVideo: {
        color: '#FF464B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 20,

    },
    boxRecipe: {
        backgroundColor: '#FF464B',
        borderRadius: 8,
        width: "50%",
        height: "100%",
        marginLeft: 80,
        marginHorizontal: 30,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    textRecipe: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        top: 3,

    },
    boxFood: {
        flexDirection: "row",
        marginTop: 90,
        borderRadius: 10,
    },
    boxFood_star: {
        backgroundColor: 'rgba(52,52,52,0.4)',
        flexDirection: "row",
        width: 60,
        marginHorizontal: 35,
        borderRadius: 10,
        justifyContent: 'space-between',
        textAlign: 'center',
        position: 'absolute',
        marginTop: 40,

    },
    textStar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    foodImage: {
        borderRadius: 10,
        width: "88%",
        height: '100%',
        marginHorizontal: 26,
        marginTop: 20,
    },
});