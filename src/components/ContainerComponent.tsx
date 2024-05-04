import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import RowComponent from './RowComponent';
import { Ionicons } from '@expo/vector-icons';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    isImageBackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: ReactNode;
    back?: boolean;
}

export default function ContainerComponent(props: Props) {
    const { isImageBackground, isScroll, title, children, back } = props;

    const navigation: any = useNavigation();

    const headerComponent = () => {
        return (
            <View style={{ flex: 1 }}>
                {(title || back) && (
                    <RowComponent
                        styles={{
                            paddingHorizontal: 16,
                            paddingVertical: 10,
                            minWidth: 48,
                            maxHeight: 48,
                        }}
                    >
                        {back && (
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
                                <Ionicons size={24} name='arrow-back' />
                            </TouchableOpacity>
                        )}
                        {title && <TextComponent size={16} text={title} font={fontFamilies.medium} flex={1} />}
                    </RowComponent>
                )}
                {returnContainer}
            </View>
        );
    };

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
            <SafeAreaView style={{ flex: 1 }}>{headerComponent()}</SafeAreaView>
        </ImageBackground>
    ) : (
        <SafeAreaView style={{ flex: 1 }}>
            <View>{headerComponent()}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
