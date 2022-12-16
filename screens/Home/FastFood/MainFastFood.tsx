import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView,} from 'react-native'
import ProfileFastFood from './FastFoodMenu';
import Menu from './ScrollMenu';

const MainFood = () => {
    return (
        <View>
            <ProfileFastFood/>
            <Menu/>
        </View>
    )
};

export default MainFood ();
