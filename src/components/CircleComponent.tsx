import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    size?: number;
    children: ReactNode;
    color?: string;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>;
}

export default function CircleComponent(props: Props) {
    const { size, children, color, onPress, styles } = props;

    const localStyles: StyleProp<ViewStyle> = {
        width: size ?? 40,
        height: size ?? 40,
        backgroundColor: color ?? appColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    };

    return onPress ? (
        <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    ) : (
        <View style={[globalStyles.shadow, localStyles, styles]}>{children}</View>
    );
}

const styles = StyleSheet.create({});
