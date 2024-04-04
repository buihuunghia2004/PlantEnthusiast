import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = ({color}) => {
  return (
    <View style={[styles.container,color]}>
    </View>
  )
}

export default Line

const styles = StyleSheet.create({
    container:{
        height:1,
        width:'100%',
        backgroundColor:'red'
    }
})