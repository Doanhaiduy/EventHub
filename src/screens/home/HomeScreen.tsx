import {
    Button,
    StyleSheet,
    Text,
    View,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    ScrollView,
    FlatList,
    ImageBackground,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';
import { globalStyles } from '../../styles/globalStyles';
import { appColors } from '../../constants/appColors';
import {
    CardComponent,
    CategoriesList,
    CircleComponent,
    EventItem,
    RowComponent,
    SectionComponent,
    SpaceComponent,
    TabBarComponent,
    TagComponent,
    TextComponent,
} from '../../components';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { fontFamilies } from '../../constants/fontFamilies';
import { EventModel } from '../../models/EventModel';

export default function HomeScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);

    const itemEvent: EventModel = {
        title: 'International Band Music',
        description: 'Enjoy the music of the world with the best band in the world',
        location: {
            title: 'New York',
            address: '1234 Street, New York, USA',
        },

        users: ['user1', 'user2', 'user3', 'user4', 'user5'],
        imageUrl: 'https://picsum.photos/200/300',
        authorId: 'author1',
        startAt: Date.now(),
        endAt: Date.now(),
        date: Date.now(),
    };

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    flex: 1,
                    marginTop: 16,
                }}
            >
                <SectionComponent styles={{ paddingHorizontal: 0, paddingTop: 20 }}>
                    <TabBarComponent title='Upcoming Events' onPress={() => {}} />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={Array(5).fill(0)}
                        renderItem={({ item, index }) => (
                            <EventItem type='card' key={`event${index}`} item={itemEvent} />
                        )}
                    />
                </SectionComponent>
                <SectionComponent>
                    <ImageBackground
                        source={require('../../assets/images/invite-image.png')}
                        style={{ flex: 1, padding: 16, minHeight: 127 }}
                        imageStyle={{
                            resizeMode: 'cover',
                            borderRadius: 12,
                        }}
                    >
                        <TextComponent text='Invite your friends' title />
                        <TextComponent text='Get $20 for ticket' />
                        <RowComponent>
                            <TouchableOpacity
                                style={[
                                    globalStyles.button,
                                    { marginTop: 12, backgroundColor: '#00F8FF', paddingHorizontal: 28 },
                                ]}
                            >
                                <TextComponent text='INVITE' color={appColors.white} font={fontFamilies.bold} />
                            </TouchableOpacity>
                        </RowComponent>
                    </ImageBackground>
                </SectionComponent>
                <SectionComponent styles={{ paddingHorizontal: 0, paddingTop: 20 }}>
                    <SpaceComponent height={18} />
                    <TabBarComponent title='NearBy You' onPress={() => {}} />
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={Array(5).fill(0)}
                        renderItem={({ item, index }) => (
                            <EventItem type='card' key={`event${index}`} item={itemEvent} />
                        )}
                    />
                </SectionComponent>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
