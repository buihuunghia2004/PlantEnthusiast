import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Count = ({ number, onMinusPress, onPlusPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onMinusPress}>
        <Image style={styles.icon} source={require('../assets/images/icons/minus_square.png')} />
      </Pressable>
      <Text style={styles.text}>{number}</Text>
      <Pressable onPress={onPlusPress}>
        <Image style={styles.icon} source={require('../assets/images/icons/plus_square.png')} />
      </Pressable>
    </View>
  )
}

export default Count

const styles = StyleSheet.create({
  container: {
    width: 132,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Lato-Regular',
    fontWeight: '400'
  }
})