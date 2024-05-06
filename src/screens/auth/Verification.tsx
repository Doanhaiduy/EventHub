import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    ButtonComponent,
    ContainerComponent,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import { obfuscateEmail } from '../../helpers';
import { appColors } from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamilies';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import authenticationAPI from '../../apis/authApi';
import { LoadingModal } from '../../modals';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Verification({ navigation, route }: any) {
    const { fullName, email, password, code } = route.params;

    const [currentCode, setCurrentCode] = useState<string>(code);
    const [codeValue, setCodeValue] = useState<string[]>([]);
    const [newCode, setNewCode] = useState<string>('');
    const [limit, setLimit] = useState<number>(60);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const ref1 = useRef<any>();
    const ref2 = useRef<any>();
    const ref3 = useRef<any>();
    const ref4 = useRef<any>();

    const dispatch = useDispatch();

    useEffect(() => {
        ref1.current.focus();
    }, []);

    useEffect(() => {
        if (limit > 0) {
            const interval = setInterval(() => {
                setLimit((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [currentCode]);

    useEffect(() => {
        setNewCode(codeValue.join(''));
    }, [codeValue]);

    const handleChangeCode = (val: string, index: number) => {
        const data = [...codeValue];
        data[index] = val;
        setCodeValue(data);
    };

    const handleResendVerification = async () => {
        setCodeValue([]);
        setNewCode('');
        setErrorMessage('');
        setIsLoading(true);
        try {
            const res = await authenticationAPI.HandleAuthentication('/verification', { email }, 'post');
            setLimit(60);
            setCurrentCode(res.data.code);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(`Can not resend verification code: ${error}`);
        }
    };

    const handleVerification = async () => {
        if (limit > 0) {
            if (currentCode !== newCode) {
                setErrorMessage('Verification code is incorrect!');
                return;
            } else {
                setErrorMessage('');
                try {
                    const res = await authenticationAPI.HandleAuthentication(
                        '/register',
                        { fullName, email, password },
                        'post'
                    );

                    dispatch(addAuth(res.data));
                    await AsyncStorage.setItem('auth', JSON.stringify(res.data));
                    Alert.alert('Success', 'Sign up successfully');
                } catch (error) {
                    setErrorMessage(`${error}`);
                    console.log(`Can not register: ${error}`);
                }
            }
        } else {
            setErrorMessage('Time out verification code. Please resend new code!');
        }
    };

    return (
        <ContainerComponent back isImageBackground isScroll>
            <SectionComponent>
                <TextComponent text='Verification' title />
                <SpaceComponent height={12} />
                <TextComponent text={`We’ve send you the verification code on ${obfuscateEmail(email)}`} />

                <SpaceComponent height={26} />
                <RowComponent justify='center'>
                    <TextInput
                        ref={ref1}
                        style={styles.input}
                        value={codeValue[0]}
                        maxLength={1}
                        keyboardType='number-pad'
                        onChangeText={(val) => {
                            handleChangeCode(val, 0);
                            val.length > 0 && ref2.current.focus();
                        }}
                    />
                    <SpaceComponent width={10} />
                    <TextInput
                        value={codeValue[1]}
                        ref={ref2}
                        style={styles.input}
                        maxLength={1}
                        keyboardType='number-pad'
                        onChangeText={(val) => {
                            handleChangeCode(val, 1);

                            val.length > 0 && ref3.current.focus();
                        }}
                    />
                    <SpaceComponent width={10} />
                    <TextInput
                        value={codeValue[2]}
                        ref={ref3}
                        style={styles.input}
                        maxLength={1}
                        keyboardType='number-pad'
                        onChangeText={(val) => {
                            handleChangeCode(val, 2);
                            val.length > 0 && ref4.current.focus();
                        }}
                    />
                    <SpaceComponent width={10} />
                    <TextInput
                        value={codeValue[3]}
                        ref={ref4}
                        style={styles.input}
                        maxLength={1}
                        keyboardType='number-pad'
                        onChangeText={(val) => {
                            handleChangeCode(val, 3);
                        }}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent
                styles={{
                    marginTop: 40,
                }}
            >
                <ButtonComponent
                    text='Continue'
                    type='primary'
                    onPress={handleVerification}
                    disabled={newCode.length !== 4}
                    icon={
                        <View
                            style={[
                                globalStyles.iconContainer,
                                {
                                    backgroundColor: newCode.length !== 4 ? appColors.gray : '#3056F0',
                                },
                            ]}
                        >
                            <Ionicons name='arrow-forward' size={24} color={appColors.white} />
                        </View>
                    }
                    iconFlex='right'
                />
            </SectionComponent>
            {errorMessage && (
                <>
                    <TextComponent
                        text={errorMessage}
                        size={14}
                        styles={{
                            textAlign: 'center',
                        }}
                        color={appColors.danger}
                    />
                    <SpaceComponent height={6} />
                </>
            )}
            <SectionComponent>
                {limit > 0 ? (
                    <RowComponent justify='center'>
                        <TextComponent text='Re-send code in ' />
                        <SpaceComponent width={4} />
                        <TextComponent text={limit < 10 ? `00:0${limit}` : `00:${limit}`} color={appColors.link} />
                    </RowComponent>
                ) : (
                    <RowComponent justify='center'>
                        <ButtonComponent
                            type='link'
                            text='Resend email verification'
                            onPress={handleResendVerification}
                        />
                    </RowComponent>
                )}
            </SectionComponent>
            <LoadingModal visible={isLoading} />
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: appColors.gray,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        fontFamily: fontFamilies.bold,
    },
});
