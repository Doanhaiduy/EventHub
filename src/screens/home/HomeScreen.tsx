import { Button, StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import {
    CategoriesList,
    CircleComponent,
    RowComponent,
    SpaceComponent,
    TagComponent,
    TextComponent,
} from '../../components';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { fontFamilies } from '../../constants/fontFamilies';

export default function HomeScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);

    return (
        <View style={[globalStyles.container]}>
            <StatusBar barStyle='light-content' />
            <View
                style={{
                    backgroundColor: appColors.primary,
                    height: Platform.OS === 'android' ? 168 : 194,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
                }}
            >
                <View style={{ paddingHorizontal: 16 }}>
                    <RowComponent>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Ionicons name='menu' size={24} color={appColors.white} />
                        </TouchableOpacity>
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                            }}
                        >
                            <RowComponent justify='center'>
                                <TextComponent text='Current Location' color={appColors.white2} size={12} />
                                <AntDesign name='caretdown' size={12} color={appColors.white} />
                            </RowComponent>
                            <TextComponent
                                text='New York'
                                color={appColors.white}
                                size={13}
                                font={fontFamilies.medium}
                            />
                        </View>
                        <CircleComponent size={36} color='#524CE0'>
                            <View>
                                <Ionicons name='notifications-outline' size={18} color={appColors.white} />
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: -2,
                                        right: -2,
                                        width: 8,
                                        height: 8,
                                        backgroundColor: '#02E9FE',
                                        borderColor: '#524CE0',
                                        borderRadius: 100,
                                    }}
                                ></View>
                            </View>
                        </CircleComponent>
                    </RowComponent>
                    <SpaceComponent height={20} />
                    <RowComponent>
                        <RowComponent
                            styles={{ flex: 1 }}
                            onPress={() =>
                                navigation.navigate('SearchEvents', {
                                    isFilter: false,
                                })
                            }
                        >
                            <Ionicons name='search' size={20} color={appColors.white} />
                            <View
                                style={{ width: 1, backgroundColor: appColors.gray2, marginHorizontal: 10, height: 20 }}
                            ></View>
                            <TextComponent text='Search...' flex={1} color={appColors.gray2} />
                        </RowComponent>
                        <TagComponent
                            onPress={() =>
                                navigation.navigate('SearchEvents', {
                                    isFilter: true,
                                })
                            }
                            bgColor='#5D56F3'
                            styles={[globalStyles.row]}
                            label='Filters'
                            icon={
                                <CircleComponent size={20} color='#B1AEFA'>
                                    <Ionicons name='filter' size={16} color='#5D56F3' />
                                </CircleComponent>
                            }
                        />
                    </RowComponent>
                </View>
                <SpaceComponent height={36} />

                <View>
                    <CategoriesList isFill />
                </View>
            </View>
            {/* <View style={{ flex: 1, backgroundColor: appColors.white }}>
                <Text>a</Text>
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({});
