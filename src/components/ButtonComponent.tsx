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
    type?: 'primary' | 'text' | 'link' | 'disable';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyles?: StyleProp<TextStyle>;
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
    textFont?: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export default function ButtonComponent(prop: Props) {
    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex, textFont, isLoading, disabled } =
        prop;

    return type === 'primary' ? (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                disabled={disabled}
                style={[
                    globalStyles.button,
                    globalStyles.shadow,
                    {
                        backgroundColor: disabled ? appColors.gray4 : color ?? appColors.primary,
                        marginBottom: 17,
                        width: '90%',
                    },
                    styles,
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
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <TextComponent text={text} color={type === 'link' ? appColors.link : appColors.text} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({});
