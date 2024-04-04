import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../theme'

const AppButton = ({ text, isActive, onPress, stylePosition }) => {
  return (
    <Pressable style={[styles.container, isActive ? styles.colorActive : styles.colorInActive, stylePosition]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  colorActive: {
    backgroundColor: Colors.greenText
  },
  colorInActive: {
    backgroundColor: '#ABABAB'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
    fontFamily: 'Lato-Medium'
  }
})