import { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    const [assetToken, setAssetToken] = useState('');

    const { getItem, setItem } = useAsyncStorage('assetToken');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsShowSplash(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        checkLogin();
    }, []);
    const checkLogin = async () => {
        const token = await getItem();
        token && setAssetToken(token);
    };
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
            {isShowSplash ? (
                <SplashScreen />
            ) : (
                <NavigationContainer>{assetToken ? <MainNavigator /> : <AuthNavigator />}</NavigationContainer>
            )}
        </>
    );
}
