import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BLine = () => {
    return (
        <View style={styles.container}/>
    )
}

export default BLine

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        backgroundColor: 'black'
    }
})