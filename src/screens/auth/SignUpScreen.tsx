import { View, StyleSheet, Image, Text, Switch } from 'react-native';
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

const initValue = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function SignUp({ navigation }: any) {
    const [values, setValues] = useState(initValue);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };
        data[key] = value;
        setValues(data);
    };

    return (
        <ContainerComponent isImageBackground isScroll back>
            <SectionComponent>
                <TextComponent text='Sign Up' font={fontFamilies.medium} size={24} />
                <SpaceComponent height={21} />
                <InputComponent
                    value={values.userName}
                    placeholder='Email'
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
            <SpaceComponent height={16} />
            <SectionComponent>
                <ButtonComponent text='SIGN UP' type='primary' />
            </SectionComponent>
            <SocialLogin />
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text='Don’t have an account? ' />
                    <ButtonComponent text='Sign in' type='link' onPress={() => navigation.navigate('LoginScreen')} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({});
