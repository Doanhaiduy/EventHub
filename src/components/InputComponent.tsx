import { KeyboardType, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { ReactNode, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';
import TextComponent from './TextComponent';

interface Props {
    value: string;
    onChange: (val: string) => void;
    affix?: ReactNode;
    suffix?: ReactNode;
    placeholder?: string;
    isPassword?: boolean;
    allowClear?: boolean;
    type?: KeyboardType;
    onEnd?: () => void;
    onBlur?: () => void;
    errMessage?: string;
}

export default function InputComponent(props: Props) {
    const {
        value,
        onChange,
        affix,
        suffix,
        placeholder,
        isPassword,
        type,
        allowClear,
        onEnd,
        onBlur,
        errMessage,
        ...restProps
    } = props;

    const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);
    const inputRef = React.createRef<TextInput>();

    const handleFocusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <View
            style={{
                marginBottom: 19,
            }}
        >
            <Pressable
                style={[
                    styles.inputContainer,
                    {
                        borderColor: errMessage ? appColors.danger : appColors.gray2,
                    },
                ]}
                onPress={handleFocusInput}
            >
                {affix ?? affix}
                <TextInput
                    {...restProps}
                    style={[styles.input, globalStyles.text]}
                    value={value}
                    placeholder={placeholder ?? ''}
                    onChangeText={(val) => onChange(val)}
                    secureTextEntry={isShowPassword}
                    placeholderTextColor='#747688'
                    keyboardType={type ?? 'default'}
                    autoCapitalize='none'
                    ref={inputRef}
                    onEndEditing={onEnd}
                    onBlur={onBlur}
                />
                {suffix ?? suffix}
                <TouchableOpacity
                    onPress={() => {
                        if (isPassword) {
                            setIsShowPassword(!isShowPassword);
                        } else {
                            onChange('');
                        }
                    }}
                >
                    {isPassword ? (
                        <Ionicons name={isShowPassword ? 'eye-off' : 'eye'} size={24} color={appColors.gray} />
                    ) : (
                        value?.length > 0 && allowClear && <Ionicons name='close' size={24} color={appColors.gray} />
                    )}
                </TouchableOpacity>
            </Pressable>
            {errMessage && <TextComponent text={`${errMessage}`} size={14} color={appColors.danger} />}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,

        width: '100%',
        paddingHorizontal: 15,
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
    },
    input: {
        padding: 0,
        margin: 0,
        flex: 1,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: appColors.text,
        paddingHorizontal: 14,
    },
});
