import { StyleSheet } from 'react-native';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 14,
        color: appColors.text,
    },
    button: {
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        padding: 16,
        minHeight: 56,
    },
    section: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});
