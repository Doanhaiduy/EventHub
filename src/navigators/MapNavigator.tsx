import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreen } from '../screens';

export default function MapNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='MapScreen' component={MapScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
