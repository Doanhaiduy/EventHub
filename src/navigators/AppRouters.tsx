import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addAuth, authSelector } from '../redux/reducers/authReducer';
import { SplashScreen } from '../screens/';
import { Regex } from '../helpers';

export default function AppRouters() {
    const [isShowSplash, setIsShowSplash] = useState(true);

    const { getItem } = useAsyncStorage('auth');

    const dispatch = useDispatch();

    const auth = useSelector(authSelector);

    useEffect(() => {
        checkLogin();
        const timeout = setTimeout(() => {
            setIsShowSplash(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const checkLogin = async () => {
        const res = await getItem();
        if (res) {
            if (!Regex.email.test(res)) {
                dispatch(addAuth(JSON.parse(res || '')));
            }
        }
    };

    console.log(auth.accessToken);

    return <>{isShowSplash ? <SplashScreen /> : auth.accessToken ? <MainNavigator /> : <AuthNavigator />}</>;
}

const styles = StyleSheet.create({});
