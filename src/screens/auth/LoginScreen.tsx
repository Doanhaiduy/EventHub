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

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(true);

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
                <InputComponent
                    value={email}
                    placeholder='Email'
                    onChange={(val) => setEmail(val)}
                    allowClear
                    affix={<Ionicons name='mail' size={22} color={appColors.gray} />}
                />
                <InputComponent
                    value={password}
                    placeholder='Password'
                    onChange={(val) => setPassword(val)}
                    isPassword
                    allowClear
                    affix={<Ionicons name='lock-closed' size={22} color={appColors.gray} />}
                />
                <RowComponent justify='space-between'>
                    <RowComponent onPress={() => setIsRemember(!isRemember)}>
                        <Switch
                            trackColor={{ true: appColors.primary }}
                            thumbColor={appColors.white}
                            value={isRemember}
                            onChange={() => setIsRemember(!isRemember)}
                            style={{ marginRight: 8 }}
                        />
                        <TextComponent text='Remember me' />
                    </RowComponent>
                    <ButtonComponent
                        text='Forgot Password?'
                        onPress={() => navigation.navigate('ForgotPassword')}
                        type='text'
                    />
                </RowComponent>
            </SectionComponent>
            <SpaceComponent height={16} />
            <SectionComponent>
                <ButtonComponent text='SIGN IN' type='primary' />
            </SectionComponent>
            <SocialLogin />
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text='Don’t have an account? ' />
                    <ButtonComponent text='Sign up' type='link' onPress={() => navigation.navigate('SignUpScreen')} />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    );
}

const styles = StyleSheet.create({});
