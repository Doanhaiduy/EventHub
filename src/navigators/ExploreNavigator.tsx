import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventDetail, HomeScreen, SearchEvents } from '../screens';

export default function ExploreNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SearchEvents' component={SearchEvents} />
            <Stack.Screen name='EventDetail' component={EventDetail} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
