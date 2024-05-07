import { Button, StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import { CircleComponent, RowComponent, TextComponent } from '../../components';
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
                    height: 179,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
                    paddingHorizontal: 16,
                }}
            >
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
                        <TextComponent text='New York' color={appColors.white} size={13} font={fontFamilies.medium} />
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
            </View>
            <View style={{ flex: 1, backgroundColor: appColors.white }}>
                <Text>a</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
