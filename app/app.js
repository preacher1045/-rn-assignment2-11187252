import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';
import { useFonts } from 'expo-font';


const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, {fontSize: SIZES.large}]}>
                My name is <Text style={styles.boldText}>Alex</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.tertiary,
    },
    text: {
        fontFamily: FONT.regular,
        fontSize: 24,
        color: COLORS.grey2,
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default Home;
