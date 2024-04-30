import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>HomeScreen</Text>
            <Button title='Logout' onPress={async () => AsyncStorage.clear()} />
        </View>
    );
}

const styles = StyleSheet.create({});
