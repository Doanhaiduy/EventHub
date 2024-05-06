import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen } from '../screens';

export default function ProfileNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
