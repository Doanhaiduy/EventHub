import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';

interface Props {
    onPress?: () => void;
    children: ReactNode;
    styles?: StyleProp<ViewStyle>;
    isShadow?: boolean;
    color?: string;
}
export default function CardComponent(props: Props) {
    const { onPress, children, styles, isShadow, color } = props;

    const localStyles: StyleProp<ViewStyle>[] = [
        globalStyles.card,
        isShadow ? globalStyles.shadow : {},
        {
            backgroundColor: color ?? appColors.white,
        },
        styles,
    ];

    return onPress ? (
        <TouchableOpacity style={localStyles} onPress={onPress}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={localStyles}>{children}</View>
    );
}
