import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddNewScreen } from '../screens';
import EventNavigator from './EventNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';
import { appColors } from '../constants/appColors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CircleComponent, TextComponent } from '../components';
import DrawerNavigator from './DrawerNavigator';
import ExploreNavigator from './ExploreNavigator';

export default function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 88 : 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.white,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let icon: ReactNode;
                    color = focused ? appColors.primary : appColors.gray5;
                    size: 24;
                    switch (route.name) {
                        case 'Explore':
                            icon = <MaterialIcons name='explore' size={size} color={color} />;
                            break;
                        case 'Events':
                            icon = <MaterialIcons name='event' size={size} color={color} />;
                            break;

                        case 'Maps':
                            icon = <MaterialIcons name='location-pin' size={size} color={color} />;
                            break;
                        case 'Profile':
                            icon = <MaterialIcons name='person' size={size} color={color} />;
                            break;
                        case 'Add':
                            icon = (
                                <CircleComponent
                                    size={52}
                                    styles={{
                                        marginTop: Platform.OS === 'ios' ? -50 : -60,
                                    }}
                                >
                                    <MaterialIcons name='add-box' size={23} color={appColors.white} />
                                </CircleComponent>
                            );
                            break;
                    }
                    return icon;
                },
                tabBarLabel({ focused, color }) {
                    return route.name === 'Add' ? null : (
                        <TextComponent
                            text={route.name}
                            size={12}
                            flex={0}
                            color={focused ? appColors.primary : appColors.gray5}
                            styles={{
                                marginBottom: Platform.OS === 'ios' ? 0 : 12,
                            }}
                        />
                    );
                },
                tabBarIconStyle: {
                    marginTop: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: Platform.OS === 'ios' ? 0 : 12,
                },
            })}
        >
            <Tab.Screen name='Explore' component={ExploreNavigator} />
            <Tab.Screen name='Events' component={EventNavigator} />
            <Tab.Screen name='Add' component={AddNewScreen} />
            <Tab.Screen name='Maps' component={MapNavigator} />
            <Tab.Screen name='Profile' component={ProfileNavigator} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});
