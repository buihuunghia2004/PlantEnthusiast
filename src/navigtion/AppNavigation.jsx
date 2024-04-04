import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import UserNavigation from './UserNavigation'
import MainNavigation from './MainNavigation'

const AppNavigation = () => {
  const appState = useSelector(state => state.app);

  return (
    <NavigationContainer>
      {appState.user ? <MainNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}

export default AppNavigation

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AppNavigation = () => {
//   return (
//     <View>
//       <Text>AppNavigation</Text>
//     </View>
//   )
// }

// export default AppNavigation

// const styles = StyleSheet.create({})