import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//://www.youtube.com/watch?v=WMOPvJot0yI

//screens

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfilePart2 from "./screens/ProfilePart2";
import LoginScreen from "./screens/LoginScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProfileRestaurant from "./screens/Home/Restaurant/RestaurantMenu";
import ProfileRestaurant2 from "./screens/Home/Restaurant/RestaurantPublications";
import ProfileFastFood from "./screens/Home/FastFood/FastFoodMenu";
import ProfileFastFood2 from "./screens/Home/FastFood/FastFoodPublications";

//Use Icon
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





const HomeStackNaviagator = createNativeStackNavigator();

function Tacks() {
    return (
        <HomeStackNaviagator.Navigator
            initialRouteName="LoginScreen"
        >
            <HomeStackNaviagator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerBackTitleVisible: true,
                }}
            />

            <HomeStackNaviagator.Screen
                name="Profile2"
                component={ProfilePart2}
                options={{
                    headerBackTitleVisible: true,
                }}

            />

            <HomeStackNaviagator.Screen
                name="ProfileRes"
                component={ProfileRestaurant}
                options={{
                    headerBackTitleVisible: true,
                }}

            />

            <HomeStackNaviagator.Screen
                name="ProfileRes2"
                component={ProfileRestaurant2}
                options={{
                    headerBackTitleVisible: true,
                }}

            />

            <HomeStackNaviagator.Screen
                name="FastFood"
                component={ProfileFastFood}
                options={{
                    headerBackTitleVisible: true,
                }}

            />

            <HomeStackNaviagator.Screen
                name="FastFood2"
                component={ProfileFastFood2}
                options={{
                    headerBackTitleVisible: true,
                }}

            />

        </HomeStackNaviagator.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                tabBarActiveTintColor: "red",
            }}>
            <Tab.Screen name="Login" component={LoginScreen} options={{
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="login" size={24} color={color} />
                ),
                headerShown: false,
            }} />

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={24} color={color} />
                ),
                headerShown: true,
            }} />

            <Tab.Screen name="Notification" component={NotificationScreen} options={{
                tabBarLabel: "Notificación",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications-outline" size={24} color={color} />
                ),
                headerShown: true,
                tabBarBadge: 7,
            }} />



            < Tab.Screen name="Profile" component={Tacks} options={{
                tabBarLabel: "Perfil",
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" size={24} color={color} />
                ),
                headerShown: false,


            }} />
        </Tab.Navigator>

    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}