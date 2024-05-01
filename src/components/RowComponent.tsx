import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    styles?: StyleProp<TextStyle>;
    children: ReactNode;
    onPress?: () => void;
}

export default function RowComponent(props: Props) {
    const { justify, styles, children, onPress } = props;

    const localStyle = [globalStyles.row, styles, { justifyContent: justify }];

    return onPress ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={localStyle}>
            {children}
        </TouchableOpacity>
    ) : (
        <View style={localStyle}>{children}</View>
    );
}

const styles = StyleSheet.create({});
