import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'



const GrayLine = ({stylePostion}) => {
    return (
        <View style={[styles.container,stylePostion]}/>
    )
}

export default GrayLine

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: '#ABABAB'
    }
})