import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
    return (
        <SafeAreaView>
            <Text>LoginScreen</Text>
            <Button
                title='Login'
                onPress={async () => {
                    await AsyncStorage.setItem('assetToken', 'token');
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
