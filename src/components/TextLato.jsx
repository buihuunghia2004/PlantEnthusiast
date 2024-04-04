import {Text, View } from 'react-native'
import React from 'react'

export const TextLato = ({size,text}) => {
  return (
      <Text style={{color:'black',fontFamily:'Lato-Medium',fontSize:size}}>{text}</Text>
  )
}

export default TextLato