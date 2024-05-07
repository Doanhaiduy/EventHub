import { Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
    ButtonComponent,
    ContainerComponent,
    InputComponent,
    SectionComponent,
    SpaceComponent,
    TextComponent,
} from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../constants/appColors';
import authenticationAPI from '../../apis/authApi';
import { Regex } from '../../helpers';
import { LoadingModal } from '../../modals';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleCheckEmail = () => {
        const isValidEmail = Regex.email.test(email);
        setError(!isValidEmail);
    };

    const handleForgotPassword = async () => {
        setLoading(true);
        try {
            const res = await authenticationAPI.HandleAuthentication('/forgotPassword', { email }, 'post');
            console.log(res);
            Alert.alert('Success', 'Please check your email to reset password!');
            setLoading(false);
        } catch (error) {
            console.log('Can not send email! ', error);
            Alert.alert('Error', 'Can not send email!');
            setLoading(false);
        }
    };

    return (
        <ContainerComponent back isImageBackground>
            <SectionComponent>
                <TextComponent text='Reset Password' title />
                <SpaceComponent height={12} />
                <TextComponent text='Please enter your email address to request a password reset.' />
                <SpaceComponent height={26} />
                <InputComponent
                    value={email}
                    onChange={(val) => setEmail(val)}
                    onEnd={handleCheckEmail}
                    errMessage={!isError ? undefined : 'Invalid email'}
                    placeholder='abc@gmail.com'
                    allowClear
                    type='email-address'
                    affix={<Ionicons name='mail' size={20} color={isError ? appColors.danger : appColors.gray} />}
                />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent
                    disabled={isError || !email}
                    onPress={handleForgotPassword}
                    text='Send'
                    type='primary'
                    icon={<Ionicons name='send' color={appColors.white} size={20} />}
                    iconFlex='right'
                />
            </SectionComponent>
            <LoadingModal visible={isLoading} />
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({});
