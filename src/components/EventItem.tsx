import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardComponent from './CardComponent';
import TextComponent from './TextComponent';
import { appInfos } from '../constants/appInfos';
import { EventModel } from '../models/EventModel';
import AvatarGroup from './AvatarGroup';
import RowComponent from './RowComponent';
import { Ionicons } from '@expo/vector-icons';
import { appColors } from '../constants/appColors';
import SpaceComponent from './SpaceComponent';
import { fontFamilies } from '../constants/fontFamilies';
import { globalStyles } from '../styles/globalStyles';

interface Props {
    item: EventModel;
    type: 'card' | 'list';
}
export default function EventItem(props: Props) {
    const { item, type } = props;

    return (
        <CardComponent isShadow styles={{ maxWidth: appInfos.sizes.WIDTH * 0.7 }} onPress={() => {}}>
            <ImageBackground
                style={{ flex: 1, marginBottom: 12, height: 131 }}
                source={require('../assets/images/event-image.png')}
                imageStyle={{
                    padding: 10,
                    resizeMode: 'cover',
                    borderRadius: 12,
                }}
            >
                <RowComponent justify='space-between'>
                    <CardComponent styles={globalStyles.noSpaceCard} color='#FFFFFFB3'>
                        <TextComponent color={appColors.danger2} font={fontFamilies.semibold} size={18} text='10' />
                        <TextComponent color={appColors.danger2} font={fontFamilies.semibold} size={10} text='JUNE' />
                    </CardComponent>
                    <CardComponent styles={globalStyles.noSpaceCard} color='#FFFFFFB3'>
                        <Ionicons name='bookmark' size={22} color={appColors.danger2} />
                    </CardComponent>
                </RowComponent>
            </ImageBackground>
            <TextComponent text={item.title} title size={18} numberOfLines={1} />
            <AvatarGroup />
            <RowComponent>
                <Ionicons name='location' size={16} color={appColors.text3} />
                <SpaceComponent width={10} />
                <TextComponent
                    flex={1}
                    numberOfLines={1}
                    text={item.location.address}
                    size={12}
                    color={appColors.text2}
                />
            </RowComponent>
        </CardComponent>
    );
}

const styles = StyleSheet.create({});
