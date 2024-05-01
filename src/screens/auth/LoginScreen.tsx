import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../../styles/globalStyles';
import { InputComponent } from '../../components';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../../constants/appColors';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={[globalStyles.container, { justifyContent: 'center', alignItems: 'center', padding: 15 }]}>
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
        </View>
    );
}

const styles = StyleSheet.create({});
