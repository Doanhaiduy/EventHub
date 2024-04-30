import { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsShowSplash(false);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return isShowSplash ? (
        <SplashScreen />
    ) : (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}
