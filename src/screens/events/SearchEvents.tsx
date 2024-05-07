import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SearchEvents({ navigation, route }: any) {
    const { isFilter }: { isFilter: boolean } = route.params;

    console.log(isFilter);

    return (
        <View>
            <Text>SearchEvents</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
