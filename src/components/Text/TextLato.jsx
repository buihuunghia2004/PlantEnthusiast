import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Colors } from '../../theme'
import { FontSizes } from '../../theme/Fonts'

const Lato_BXL_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.black, styles.XL]}>{text}</Text>
  )
})
const Lato_BM_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.black, styles.M]}>{text}</Text>
  )
})
const Lato_BS_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.black, styles.S]}>{text}</Text>
  )
})

const Lato_GreenXL_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.green, styles.XL]}>{text}</Text>
  )
})
const Lato_GreenM_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.green, styles.M]}>{text}</Text>
  )
})
const Lato_GreenS_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.green, styles.S]}>{text}</Text>
  )
})

const Lato_GrayL_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.gray, styles.L]}>{text}</Text>
  )
})
const Lato_GrayS_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.textBase, stylePosition, styles.gray, styles.S]}>{text}</Text>
  )
})

const Lato_WS_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.fontFamily, styles.fontWeigth, stylePosition, styles.white, styles.S]}>{text}</Text>
  )
})
const Lato_WM_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.fontFamily, styles.fontWeigth, stylePosition, styles.white, styles.M]}>{text}</Text>
  )
})
const Lato_RM_Text = memo(({ text, onPress, stylePosition }) => {
  return (
    <Text onPress={onPress} style={[styles.fontFamily, styles.fontWeigth, stylePosition, styles.red, styles.M]}>{text}</Text>
  )
})
export {
  Lato_BM_Text, Lato_BS_Text, Lato_BXL_Text,
  Lato_GrayL_Text, Lato_GrayS_Text,
  Lato_GreenM_Text, Lato_GreenS_Text, Lato_GreenXL_Text,
  Lato_WM_Text, Lato_WS_Text,
  Lato_RM_Text
}

const styles = StyleSheet.create({
  black: {
    color: 'black'
  },
  green: {
    color: Colors.greenText
  },
  white: {
    color: 'white'
  },
  gray: {
    color: Colors.hintText
  },
  red: {
    color: Colors.redErorr
  },
  S: {
    fontSize: FontSizes.S
  },
  M: {
    fontSize: FontSizes.M
  },
  L: {
    fontSize: FontSizes.L
  },
  XL: {
    fontSize: FontSizes.XL
  },
  textBase: {
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
  }

})