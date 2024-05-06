import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventsScreen } from '../screens';

export default function EventNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='EventsScreen' component={EventsScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
