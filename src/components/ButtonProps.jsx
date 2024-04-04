import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme'
import { Lato_WS_Text } from './Text/TextLato'

const ButtonProps = ({text,stylePosition,onPress}) => {
  return (
    <View style={[styles.container,stylePosition]}>
      <Lato_WS_Text text={text} onPress={onPress}/>
    </View>
  )
};

export default ButtonProps

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.greenMain,
        padding:8,
        borderRadius:4
    },
})