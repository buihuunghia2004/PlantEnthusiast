import {Text} from 'react-native'
import React from 'react'

const TextPoppins = (props) => {
    const {styles,text} = props
  return (
    <Text style={styles.text}>{text}</Text>
  )
}

export default TextPoppins