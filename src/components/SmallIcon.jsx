import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SmallIcon = ({ require, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.size} source={require} />
    </TouchableOpacity>
  )
}

export default SmallIcon

const styles = StyleSheet.create({
  size: {
    width: 24,
    height: 24,
    alignSelf: 'center'
  }
})