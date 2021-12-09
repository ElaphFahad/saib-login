import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform} from 'react-native'
import colors from '../config/colors' 
import defaultStyles from '../config/styles';
import {MaterialCommunityIcons } from '@expo/vector-icons';
export default function AppTextInput(props) {
    const { icon, ...otherProps } = props;
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons
                name={icon}
                color={defaultStyles.colors.medium}
                size={20}
                style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        width: '100%',
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10
    }
})
