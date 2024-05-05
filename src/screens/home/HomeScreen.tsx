import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);

    const handleLogout = async () => {
        await AsyncStorage.setItem('auth', auth.email);
        dispatch(removeAuth());
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>HomeScreen</Text>
            <Button title='Logout' onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({});
