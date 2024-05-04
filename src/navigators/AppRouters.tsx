import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, authSelector } from '../redux/reducers/authReducer';

export default function AppRouters() {
    const { getItem } = useAsyncStorage('assetToken');
    const dispatch = useDispatch();

    const auth = useSelector(authSelector);

    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const res = await getItem();
        res && dispatch(addAuth(JSON.parse(res)));
    };
    console.log(auth.accessToken);

    return <>{auth.accessToken ? <MainNavigator /> : <AuthNavigator />}</>;
}

const styles = StyleSheet.create({});
