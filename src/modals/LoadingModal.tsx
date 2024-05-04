import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { TextComponent } from '../components';
import { appColors } from '../constants/appColors';

interface Props {
    visible: boolean;
    message?: string;
    // onClose: () => void;
}

export default function LoadingModal(props: Props) {
    const { visible, message } = props;

    return (
        <Modal style={{ flex: 1 }} visible={visible} transparent statusBarTranslucent>
            <View
                style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}
            >
                <TextComponent text='Loading...' flex={0} color={appColors.white} />
                <ActivityIndicator color={appColors.white} size={32} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({});
