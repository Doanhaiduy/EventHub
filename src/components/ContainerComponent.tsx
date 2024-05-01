import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: ReactNode;
}

export default function ContainerComponent(props: Props) {
    const { isImageBackground, isScroll, title, children } = props;

    const returnContainer = isScroll ? (
        <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
    ) : (
        <View style={{ flex: 1 }}>{children}</View>
    );

    return isImageBackground ? (
        <ImageBackground
            source={require('../assets/images/splash-image.png')}
            style={{ flex: 1 }}
            imageStyle={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>{returnContainer}</SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={{ flex: 1 }}>{returnContainer}</SafeAreaView>
    );
}

const styles = StyleSheet.create({});
