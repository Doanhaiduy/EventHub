import { ActivityIndicator, Image, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { appInfos } from '../constants/appInfos';
import { SpaceComponent } from '../components';
import { appColors } from '../constants/appColors';

export default function SplashScreen() {
    return (
        <ImageBackground
            source={require('../assets/images/splash-image.png')}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            imageStyle={{ flex: 1 }}
        >
            <Image
                source={require('../assets/images/logo.png')}
                style={{
                    width: appInfos.sizes.WIDTH * 0.7,
                    resizeMode: 'contain',
                }}
            />
            <SpaceComponent height={16} />
            <ActivityIndicator size={22} color={appColors.gray} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({});
