import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import { appInfos } from '../../constants/appInfos';
import { appColors } from '../../constants/appColors';

export default function OnboardingScreen({ navigation }: any) {
    const [index, setIndex] = React.useState(0);
    return (
        <View style={[globalStyles.container]}>
            <Swiper
                style={{}}
                loop={false}
                onIndexChanged={(num) => setIndex(num)}
                index={index}
                activeDotColor={appColors.white}
            >
                <Image
                    source={require('../../assets/images/onboarding-1.png')}
                    style={{
                        flex: 1,
                        width: appInfos.sizes.WIDTH,
                        height: appInfos.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
                <Image
                    source={require('../../assets/images/onboarding-2.png')}
                    style={{
                        flex: 1,
                        width: appInfos.sizes.WIDTH,
                        height: appInfos.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
                <Image
                    source={require('../../assets/images/onboarding-3.png')}
                    style={{
                        flex: 1,
                        width: appInfos.sizes.WIDTH,
                        height: appInfos.sizes.HEIGHT,
                        resizeMode: 'cover',
                    }}
                />
            </Swiper>
            <View
                style={[
                    {
                        paddingHorizontal: 22,
                        paddingVertical: 20,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                ]}
            >
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.text, { color: appColors.gray2 }]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => (index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen'))}
                >
                    <Text style={[styles.text]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: appColors.white,
        fontSize: 16,
        fontWeight: '500',
    },
});
