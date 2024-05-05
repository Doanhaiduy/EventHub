import { Alert, StyleSheet } from 'react-native';
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
import { LoadingModal } from '../../modals';
import authenticationAPI from '../../apis/authApi';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemasCustom } from '../../utils/zod';
import { checkHasErr } from '../../helpers';

const schema = z
    .object({
        fullName: schemasCustom.fullName,
        email: schemasCustom.email,
        password: schemasCustom.password('SignUp'),
        confirmPassword: schemasCustom.confirmPassword,
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

type FormFields = z.infer<typeof schema>;

export default function SignUp({ navigation }: any) {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<FormFields>({
        defaultValues: {
            fullName: 'Đoàn Hải Duy',
            email: 'haiduytbt2k3@gmail.com',
            password: '12345678a',
            confirmPassword: '12345678a',
        },
        resolver: zodResolver(schema),
    });
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const { fullName, email, password } = data;
        try {
            const res = await authenticationAPI.HandleAuthentication(
                '/verification',
                {
                    email,
                },
                'post'
            );
            console.log(res);
            navigation.navigate('Verification', { fullName, email, password, code: res.data.code });
        } catch (error) {
            setError('root', {
                message: `${error}`,
            });
        }
    };

    return (
        <>
            <ContainerComponent isImageBackground isScroll back>
                <SectionComponent>
                    <TextComponent text='Sign Up' font={fontFamilies.medium} size={24} />
                    <SpaceComponent height={21} />
                    <Controller
                        control={control}
                        name='fullName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder='Full name'
                                allowClear
                                affix={
                                    <Ionicons
                                        name='person'
                                        size={22}
                                        color={errors.fullName ? appColors.danger : appColors.gray}
                                    />
                                }
                                errMessage={errors.fullName?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder='Email'
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
                    <Controller
                        control={control}
                        name='confirmPassword'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder='Confirm Password'
                                isPassword
                                allowClear
                                affix={
                                    <Ionicons
                                        name='lock-closed'
                                        size={22}
                                        color={errors.confirmPassword ? appColors.danger : appColors.gray}
                                    />
                                }
                                errMessage={errors.confirmPassword?.message}
                            />
                        )}
                    />
                </SectionComponent>
                <SpaceComponent height={16} />
                <SectionComponent>
                    <ButtonComponent
                        onPress={handleSubmit(onSubmit)}
                        disabled={checkHasErr(errors)}
                        text='SIGN UP'
                        type='primary'
                    />
                </SectionComponent>
                <SpaceComponent height={6} />
                {errors.root && <TextComponent text={`${errors.root.message}`} size={14} color={appColors.danger} />}
                <SocialLogin />
                <SectionComponent>
                    <RowComponent justify='center'>
                        <TextComponent text='Don’t have an account? ' />
                        <ButtonComponent
                            text='Sign in'
                            type='link'
                            onPress={() => navigation.navigate('LoginScreen')}
                        />
                    </RowComponent>
                </SectionComponent>
            </ContainerComponent>
            <LoadingModal visible={isSubmitting} />
        </>
    );
}

const styles = StyleSheet.create({});
