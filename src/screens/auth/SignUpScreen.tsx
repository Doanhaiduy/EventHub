import { StyleSheet } from 'react-native';
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
        resolver: zodResolver(schema),
    });
    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const { fullName, email, password } = data;
        try {
            const res = await authenticationAPI.HandleAuthentication(
                '/register',
                {
                    fullName,
                    email,
                    password,
                },
                'post'
            );
            console.log(res.data);
            dispatch(addAuth(res.data));
            await AsyncStorage.setItem('auth', JSON.stringify(res.data));
        } catch (error) {
            setError('email', {
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
                    <ButtonComponent onPress={handleSubmit(onSubmit)} text='SIGN UP' type='primary' />
                </SectionComponent>
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
