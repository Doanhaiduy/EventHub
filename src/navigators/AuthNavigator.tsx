import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, LoginScreen, OnboardingScreen, SignUpScreen, Verication } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthNavigator() {
    const [isExistingUser, setIsExistingUser] = useState(false);
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        checkUserExisting();
    }, []);

    const checkUserExisting = async () => {
        const res = await AsyncStorage.getItem('auth');
        res && setIsExistingUser(true);
    };
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {!isExistingUser && <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />}
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='Verication' component={Verication} />
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        </Stack.Navigator>
    );
}
