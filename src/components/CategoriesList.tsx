import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../constants/appColors';
import TagComponent from './TagComponent';

interface Props {
    isFill?: boolean;
}

interface Category {
    icon: ReactNode;
    color: string;
    label: string;
    key: string;
}
export default function CategoriesList(props: Props) {
    const { isFill } = props;

    const categories: Category[] = [
        {
            key: 'sports',
            label: 'Sports',
            icon: <Ionicons name='basketball' size={20} color={isFill ? appColors.white : '#F06A53'} />,
            color: '#F06A53',
        },
        {
            key: 'music',
            label: 'Music',
            icon: <Ionicons name='musical-notes' size={20} color={isFill ? appColors.white : '#F59762'} />,
            color: '#F59762',
        },
        {
            key: 'food',
            label: 'Food',
            icon: <Ionicons name='fast-food' size={20} color={isFill ? appColors.white : '#29D697'} />,
            color: '#29D697',
        },
        {
            key: 'art',
            label: 'Art',
            icon: <Ionicons name='brush' size={20} color={isFill ? appColors.white : '#46CDFB'} />,
            color: '#46CDFB',
        },
    ];
    return (
        <FlatList
            style={{ paddingHorizontal: 16 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item, index }) => (
                <TagComponent
                    styles={{ marginRight: index === categories.length - 1 ? 28 : 12, minWidth: 82 }}
                    key={item.key}
                    onPress={() => {}}
                    label={item.label}
                    icon={item.icon}
                    textColor={isFill ? appColors.white : item.color}
                    bgColor={isFill ? item.color : appColors.white}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({});
