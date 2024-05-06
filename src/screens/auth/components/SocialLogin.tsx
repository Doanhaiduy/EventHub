import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components';
import { appColors } from '../../../constants/appColors';
import { fontFamilies } from '../../../constants/fontFamilies';
import { Facebook, Google } from '../../../assets/svg';

export default function SocialLogin() {
    const handleLoginWithGoogle = () => {
        console.log('Login with Google');
    };
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
            <SpaceComponent height={16} />
            <ButtonComponent
                onPress={handleLoginWithGoogle}
                text='Google'
                icon={<Google />}
                type='primary'
                iconFlex='left'
                textColor={appColors.text}
                color={appColors.white}
                textFont={fontFamilies.regular}
            />

            <ButtonComponent
                text='Facebook'
                icon={<Facebook />}
                type='primary'
                iconFlex='left'
                textColor={appColors.text}
                color={appColors.white}
                textFont={fontFamilies.regular}
            />
        </SectionComponent>
    );
}

const styles = StyleSheet.create({});
