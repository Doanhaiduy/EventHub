import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native';
import React from 'react';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    styles?: StyleProp<TextStyle>;
    title?: boolean;
}

export default function TextComponent(props: Props) {
    const { text, color, size, flex, font, title, styles } = props;
    return (
        <Text
            style={[
                globalStyles.text,
                {
                    color: color ?? appColors.text,
                    flex: flex ?? 0,
                    fontSize: size ?? title ? 24 : 14,
                    fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.regular,
                },
            ]}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({});
