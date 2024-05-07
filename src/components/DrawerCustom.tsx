import { FlatList, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RowComponent from './RowComponent';
import ButtonComponent from './ButtonComponent';
import TextComponent from './TextComponent';
import { globalStyles } from '../styles/globalStyles';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SpaceComponent from './SpaceComponent';
import { fontFamilies } from '../constants/fontFamilies';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../redux/reducers/authReducer';
import { appColors } from '../constants/appColors';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DrawerCustom({ navigation }: any) {
    const user = useSelector(authSelector);
    const dispatch = useDispatch();
    const size = 20,
        color = appColors.gray;

    const profileMenu = [
        {
            key: 'MyProfile',
            title: 'My Profile',
            icon: <AntDesign name='user' size={size} color={color} />,
        },
        {
            key: 'Message',
            title: 'Message',
            icon: <AntDesign name='message1' size={size} color={color} />,
        },
        {
            key: 'Calendar',
            title: 'Calendar',
            icon: <AntDesign name='calendar' size={size} color={color} />,
        },
        {
            key: 'Bookmark',
            title: 'Bookmark',
            icon: <AntDesign name='book' size={size} color={color} />,
        },
        {
            key: 'ContactUs',
            title: 'ContactUs',
            icon: <AntDesign name='contacts' size={size} color={color} />,
        },
        {
            key: 'Settings',
            title: 'Settings',
            icon: <AntDesign name='setting' size={size} color={color} />,
        },
        {
            key: 'HelpAndFAQs',
            title: 'HelpAndFAQs',
            icon: <AntDesign name='questioncircleo' size={size} color={color} />,
        },
        {
            key: 'SignOut',
            title: 'SignOut',
            icon: <AntDesign name='logout' size={size} color={color} />,
        },
    ];

    const handleSignOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch(removeAuth());
    };
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={() => {
                    navigation.closeDrawer();
                    navigation.navigate('Profile', {
                        screen: 'ProfileScreen',
                        params: {},
                    });
                }}
            >
                {user.photoUrl ? (
                    <Image style={styles.avatar} source={{ uri: user.photoUrl }} />
                ) : (
                    <View
                        style={[
                            styles.avatar,
                            {
                                backgroundColor: appColors.gray,
                            },
                        ]}
                    >
                        <TextComponent
                            text={user.fullName.split(' ')[user.fullName.split(' ').length - 1].substring(0, 1)}
                            title
                            color={appColors.white}
                            size={24}
                        />
                    </View>
                )}
                <TextComponent text={user.fullName} title size={18} />
            </TouchableOpacity>
            <FlatList
                data={profileMenu}
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, marginVertical: 20 }}
                renderItem={({ item, index }) => (
                    <RowComponent
                        justify='flex-start'
                        styles={[styles.listItem]}
                        onPress={
                            item.key === 'SignOut'
                                ? () => handleSignOut()
                                : () => {
                                      console.log(item.key);
                                      navigation.closeDrawer();
                                  }
                        }
                    >
                        {item.icon}
                        <TextComponent text={item.title} styles={[styles.listItemText]} />
                    </RowComponent>
                )}
            />
            <RowComponent justify='flex-start'>
                <TouchableOpacity
                    style={[
                        globalStyles.button,
                        {
                            backgroundColor: '#00F8F833',
                            height: 'auto',
                        },
                    ]}
                >
                    {/* <Ionicons name='' */}
                    <MaterialCommunityIcons name='crown' size={22} color='#00F8F8' />
                    <SpaceComponent width={8} />
                    <TextComponent text='Upgrade Pro' color='#00F8F8' font={fontFamilies.medium} />
                </TouchableOpacity>
            </RowComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
    },
    avatar: {
        width: 52,
        height: 52,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItem: {
        paddingVertical: 12,
    },
    listItemText: {
        paddingLeft: 12,
    },
});
