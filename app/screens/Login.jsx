import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


import Screen from './../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

export default function LoginScreen(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style ={{backgroundColor: colors.black }}>
            <Image
                style={styles.logo}
                source={require('../assets/SAIBLogo.png')}
            />
            <AppTextInput
                icon="email"
                keyboardType="email-address"
                placeholder='Email'
                textContentType="emailAddress"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setUsername(text)}

            />
            <AppTextInput
                icon="lock"
                secureTextEntry={true}
                placeholder='Password'
                textContentType="password"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}


            />

            <AppButton
                title="Login"
                onPress={() => console.log('Button Clicked', username, password)}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }

})