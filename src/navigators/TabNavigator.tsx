import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import ExploreNavigator from './ExploreNavigator';
import EventNavigator from './EventNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='Explore' component={ExploreNavigator} />
            <Tab.Screen name='Events' component={EventNavigator} />
            <Tab.Screen name='Maps' component={MapNavigator} />
            <Tab.Screen name='Profile' component={ProfileNavigator} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
