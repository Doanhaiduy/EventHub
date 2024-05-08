import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import { appColors } from '../constants/appColors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    title: string;
    onPress: () => void;
}

export default function TabBarComponent(props: Props) {
    const { title, onPress } = props;

    return (
        <RowComponent
            styles={{
                marginBottom: 20,
                paddingHorizontal: 16,
            }}
        >
            <TextComponent text={title} flex={1} size={18} title />
            <RowComponent onPress={onPress}>
                <TextComponent text='See All' size={12} color={appColors.text2} />
                <Ionicons name='chevron-forward' size={14} color={appColors.text2} />
            </RowComponent>
        </RowComponent>
    );
}

const styles = StyleSheet.create({});
