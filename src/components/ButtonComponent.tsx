import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

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
    return type === 'primary' ? (
        <TouchableOpacity
            style={[
                globalStyles.button,
                {
                    backgroundColor: color ?? appColors.primary,
                },
            ]}
            onPress={onPress}
        >
            {icon && iconFlex !== 'right' && icon}
            <TextComponent
                text={text}
                color={textColor ?? appColors.white}
                styles={[
                    textStyles,
                    {
                        marginLeft: icon ? 12 : 0,
                    },
                ]}
                flex={icon && iconFlex === 'right' ? 1 : 0}
            />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent text={text} color={type === 'link' ? appColors.link : appColors.text} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
