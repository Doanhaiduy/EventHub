import {
    ActivityIndicator,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
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
    textFont?: string;
    isLoading?: boolean;
}

export default function ButtonComponent(prop: Props) {
    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex, textFont, isLoading } = prop;
    return type === 'primary' ? (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                style={[
                    globalStyles.button,
                    globalStyles.shadow,
                    {
                        backgroundColor: color ?? appColors.primary,
                        marginBottom: 17,
                        width: '90%',
                    },
                ]}
                onPress={onPress}
            >
                {icon && iconFlex === 'left' && icon}
                {isLoading ? (
                    <ActivityIndicator color={appColors.white} size='small' />
                ) : (
                    <TextComponent
                        text={text}
                        font={textFont ?? fontFamilies.medium}
                        color={textColor ?? appColors.white}
                        styles={[
                            textStyles,
                            {
                                marginLeft: icon ? 12 : 0,
                                fontSize: 16,
                                textAlign: 'center',
                            },
                        ]}
                        flex={icon && iconFlex === 'right' ? 1 : 0}
                    />
                )}
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>
    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent text={text} color={type === 'link' ? appColors.link : appColors.text} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
