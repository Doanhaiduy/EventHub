import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppRouters from './src/navigators/AppRouters';

export default function App() {
    const [fontLoaded] = useFonts({
        AirbnbCereal_W_Bd: require('./assets/fonts/AirbnbCereal_W_Bd.otf'),
        AirbnbCereal_W_Bk: require('./assets/fonts/AirbnbCereal_W_Bk.otf'),
        AirbnbCereal_W_Blk: require('./assets/fonts/AirbnbCereal_W_Blk.otf'),
        AirbnbCereal_W_Lt: require('./assets/fonts/AirbnbCereal_W_Lt.otf'),
        AirbnbCereal_W_Md: require('./assets/fonts/AirbnbCereal_W_Md.otf'),
        AirbnbCereal_W_XBd: require('./assets/fonts/AirbnbCereal_W_XBd.otf'),
    });

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
            <Provider store={store}>
                <NavigationContainer>
                    <AppRouters />
                </NavigationContainer>
            </Provider>
        </>
    );
}
