import { KeyboardType, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { ReactNode, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../constants/appColors';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    value: string;
    onChange: (val: string) => void;
    affix?: ReactNode;
    suffix?: ReactNode;
    placeholder?: string;
    isPassword?: boolean;
    allowClear?: boolean;
    type?: KeyboardType;
}

export default function InputComponent(props: Props) {
    const { value, onChange, affix, suffix, placeholder, isPassword, type, allowClear } = props;

    const [isShowPassword, setIsShowPassword] = useState(isPassword ?? false);
    return (
        <View style={[styles.inputContainer]}>
            {affix ?? affix}
            <TextInput
                style={[styles.input, globalStyles.text]}
                value={value}
                placeholder={placeholder ?? ''}
                onChangeText={(val) => onChange(val)}
                secureTextEntry={isShowPassword}
                placeholderTextColor='#747688'
                keyboardType={type ?? 'default'}
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
                    value.length > 0 && allowClear && <Ionicons name='close' size={24} color={appColors.gray} />
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: appColors.gray3,
        width: '100%',
        paddingHorizontal: 15,
        minHeight: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        marginBottom: 19,
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
