import { Text, View, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React, { useState,memo } from 'react'

const AppInput = (props) => {
    const { placeholder, isPassword, errorText, stylePosition, onChangeText } = props
    const [showPass, setShowPass] = useState(isPassword); //defaul hide
    return (
        <View>
            <View style={styles.rowContainer}>
                <TextInput onChangeText={onChangeText} secureTextEntry={showPass} style={styles.inputText} placeholder={placeholder} />
                {isPassword &&
                    <Pressable onPress={() => setShowPass(!showPass)}>
                        <Image source={
                            showPass ?
                                require('../assets/images/icons/hide.png')
                                :
                                require('../assets/images/icons/show.png')
                        }
                            style={styles.icon} />
                    </Pressable>
                }
            </View>
            <Text style={styles.errorText}>{ errorText || ''}</Text>
        </View>
    )
}

export default memo(AppInput)

const styles = StyleSheet.create({
    errorText: {
        color: '#CE0000',
        fontSize: 11,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600'
    },
    icon: {
        width: 29,
        height: 24,
        alignSelf: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    inputText: {
        flex: 1,

    }
})