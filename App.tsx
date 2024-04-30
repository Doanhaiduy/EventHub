import { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import { useFonts } from 'expo-font';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    const [assetToken, setAssetToken] = useState('');

    const { getItem, setItem } = useAsyncStorage('assetToken');
    const [fontLoaded] = useFonts({
        AirbnbCereal_W_Bd: require('./assets/fonts/AirbnbCereal_W_Bd.otf'),
        AirbnbCereal_W_Bk: require('./assets/fonts/AirbnbCereal_W_Bk.otf'),
        AirbnbCereal_W_Blk: require('./assets/fonts/AirbnbCereal_W_Blk.otf'),
        AirbnbCereal_W_Lt: require('./assets/fonts/AirbnbCereal_W_Lt.otf'),
        AirbnbCereal_W_Md: require('./assets/fonts/AirbnbCereal_W_Md.otf'),
        AirbnbCereal_W_XBd: require('./assets/fonts/AirbnbCereal_W_XBd.otf'),
    });

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
