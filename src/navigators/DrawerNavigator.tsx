import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExploreNavigator from './ExploreNavigator';
import { DrawerCustom } from '../components';
import TabNavigator from './TabNavigator';

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
            }}
            drawerContent={(props) => <DrawerCustom {...props} />}
        >
            <Drawer.Screen name='HomeNavigator' component={TabNavigator} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});
