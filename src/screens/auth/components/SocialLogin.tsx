import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Ionicons } from '@expo/vector-icons';

export default function SocialLogin() {
    return (
        <SectionComponent>
            <TextComponent
                styles={{
                    textAlign: 'center',
                }}
                text='OR'
                color={appColors.gray4}
                font={fontFamilies.medium}
                size={16}
            />
            <ButtonComponent
                text='Google'
                icon={<Ionicons name='airplane-sharp' size={20} />}
                type='primary'
                iconFlex='left'
                textColor={appColors.text}
                color={appColors.white}
            />
        </SectionComponent>
    );
}

const styles = StyleSheet.create({});
