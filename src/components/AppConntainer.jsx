import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppContainer = (props) => {
  const { styles, children } = props
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default AppContainer