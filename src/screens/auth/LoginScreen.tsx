import { View, StyleSheet, Image, Text, Switch, Alert } from 'react-native';
import { useState } from 'react';
import {
    ButtonComponent,
    ContainerComponent,
    InputComponent,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamilies';
import SocialLogin from './components/SocialLogin';
import authenticationAPI from '../../apis/authApi';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { z } from 'zod';
import { schemasCustom } from '../../utils/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingModal } from '../../modals';

const schema = z.object({
    email: schemasCustom.email,
    password: schemasCustom.password('Login'),
});

type FormFields = z.infer<typeof schema>;

export default function LoginScreen({ navigation }: any) {
    const {
        handleSubmit,
        setError,
        control,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });
    const [isRemember, setIsRemember] = useState(true);

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const { email, password } = data;
        try {
            const res = await authenticationAPI.HandleAuthentication(
                '/login',
                {
                    email,
                    password,
                },
                'post'
            );
            dispatch(addAuth(res.data));
            await AsyncStorage.setItem('auth', isRemember ? JSON.stringify(res.data) : email);
            Alert.alert('Success', 'Login successfully');
        } catch (error) {
            setError('root', { message: `${error}` });
        }
    };

    return (
        <ContainerComponent isImageBackground isScroll>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 75,
                }}
            >
                <Image
                    source={require('../../assets/images/text-logo.png')}
                    style={{
                        width: 162,
                        height: 114,
                        marginBottom: 30,
                    }}
                />
            </SectionComponent>
            <SectionComponent>
                <TextComponent text='Sign in' font={fontFamilies.medium} size={24} />
                <SpaceComponent height={21} />
                <Controller
                    control={control}
                    name='email'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputComponent
                            value={value}
                            placeholder='Email'
                            onChange={onChange}
                            allowClear
                            affix={
                                <Ionicons
                                    name='mail'
                                    size={22}
                                    color={errors.email ? appColors.danger : appColors.gray}
                                />
                            }
                            errMessage={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name='password'
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputComponent
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder='Password'
                            isPassword
                            allowClear
                            affix={
                                <Ionicons
                                    name='lock-closed'
                                    size={22}
                                    color={errors.password ? appColors.danger : appColors.gray}
                                />
                            }
                            errMessage={errors.password?.message}
                        />
                    )}
                />
                <RowComponent justify='space-between'>
                    <RowComponent onPress={() => setIsRemember(!isRemember)}>
                        <Switch
                            trackColor={{ true: appColors.primary }}
                            thumbColor={appColors.white}
                            value={isRemember}
                            onChange={() => setIsRemember(!isRemember)}
                        />
                        <SpaceComponent width={4} />
                        <TextComponent text='Remember me' />
                    </RowComponent>
                    <ButtonComponent
                        text='Forgot Password?'
                        onPress={() => navigation.navigate('ForgotPassword')}
                        type='text'
                    />
                </RowComponent>
                <SpaceComponent height={6} />
                {errors.root && <TextComponent text={`${errors.root.message}`} color={appColors.danger} />}
            </SectionComponent>
            <SpaceComponent height={16} />
            <SectionComponent>
                <ButtonComponent onPress={handleSubmit(onSubmit)} text='SIGN IN' type='primary' />
            </SectionComponent>
            <SocialLogin />
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text='Don’t have an account? ' />
                    <ButtonComponent text='Sign up' type='link' onPress={() => navigation.navigate('SignUpScreen')} />
                </RowComponent>
            </SectionComponent>
            <LoadingModal visible={isSubmitting} />
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({});
