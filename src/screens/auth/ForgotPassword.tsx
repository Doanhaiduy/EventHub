import { StyleSheet, Text, View } from 'react-native';
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

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    return (
        <ContainerComponent back isImageBackground>
            <SectionComponent>
                <TextComponent text='Reset Password' title />
                <TextComponent text='Please enter your email address to request a password reset.' />
                <SpaceComponent height={26} />
                <InputComponent
                    value={email}
                    onChange={(val) => setEmail(val)}
                    placeholder='abc@gmail.com'
                    allowClear
                    type='email-address'
                    affix={<Ionicons name='mail' size={20} color={appColors.gray} />}
                />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent
                    text='Send'
                    type='primary'
                    icon={<Ionicons name='send' color={appColors.white} size={20} />}
                    iconFlex='right'
                />
            </SectionComponent>
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({});
