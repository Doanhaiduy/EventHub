import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import TextComponent from './TextComponent';

interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyles?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
}

export default function ButtonComponent(prop: Props) {
    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex } = prop;
    return (
        <TouchableOpacity>
            {icon && iconFlex === 'left' && icon}
            <TextComponent text={text} color={textColor} styles={textStyles} />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
