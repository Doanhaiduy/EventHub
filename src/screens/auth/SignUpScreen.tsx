import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
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
import { Validate } from '../../utils/validate';
import { useDispatch } from 'react-redux';
import { addAuth } from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initValue = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function SignUp({ navigation }: any) {
    const [values, setValues] = useState(initValue);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (values.email || values.password) {
            setErrorMessage('');
        }
    }, [values.email, values.password]);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };
        data[key] = value;
        setValues(data);
    };

    const handleRegister = async () => {
        const { email, password, confirmPassword } = values;

        const emailValidation = Validate.email(email);
        const passwordValidation = Validate.password(password);

        if (email && password && confirmPassword) {
            if (password !== confirmPassword) {
                setErrorMessage('Password and Confirm Password must be the same');
                return;
            }
            if (emailValidation && passwordValidation) {
                setErrorMessage('');
                setIsLoading(true);
                try {
                    const res = await authenticationAPI.HandleAuthentication(
                        '/register',
                        {
                            fullName: values.userName,
                            email: values.email,
                            password: values.password,
                        },
                        'post'
                    );
                    dispatch(addAuth(res.data));
                    await AsyncStorage.setItem('auth', JSON.stringify(res.data));
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                }
            } else {
                setErrorMessage('Email is not valid');
            }
        } else {
            setErrorMessage('Please fill in all fields');
        }
    };

    return (
        <>
            <ContainerComponent isImageBackground isScroll back>
                <SectionComponent>
                    <TextComponent text='Sign Up' font={fontFamilies.medium} size={24} />
                    <SpaceComponent height={21} />
                    <InputComponent
                        value={values.userName}
                        placeholder='Full name'
                        onChange={(val) => handleChangeValue('userName', val)}
                        allowClear
                        affix={<Ionicons name='person' size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.email}
                        placeholder='Email'
                        onChange={(val) => handleChangeValue('email', val)}
                        allowClear
                        affix={<Ionicons name='mail' size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.password}
                        placeholder='Password'
                        onChange={(val) => handleChangeValue('password', val)}
                        isPassword
                        allowClear
                        affix={<Ionicons name='lock-closed' size={22} color={appColors.gray} />}
                    />
                    <InputComponent
                        value={values.confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(val) => handleChangeValue('confirmPassword', val)}
                        isPassword
                        allowClear
                        affix={<Ionicons name='lock-closed' size={22} color={appColors.gray} />}
                    />
                </SectionComponent>
                <SectionComponent>
                    {errorMessage ? (
                        <SectionComponent>
                            <TextComponent text={errorMessage} color={appColors.danger} />
                        </SectionComponent>
                    ) : null}
                </SectionComponent>
                <SpaceComponent height={16} />
                <SectionComponent>
                    <ButtonComponent onPress={handleRegister} text='SIGN UP' type='primary' />
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
            <LoadingModal visible={isLoading} />
        </>
    );
}

const styles = StyleSheet.create({});
