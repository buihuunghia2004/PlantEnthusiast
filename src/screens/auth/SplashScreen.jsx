import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../theme'
import AsyncStorage from '@react-native-community/async-storage'
//redux
import { useDispatch } from 'react-redux'
import { loadUser } from '../../redux/Reducer'

//API
import { getUserInfo } from '../../api/UserAPI'

const SplashScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadIsLogin = async () => {
      try {
        //check is login
        const id = await AsyncStorage.getItem('idLogin')
        if (id !== null) {

          //Get UserInfo from API
          const result = await getUserInfo(id)

          if (result.status) {
            console.log(result.data);
            dispatch(loadUser(result.data))
          } else {
            navigation.navigate('Login')
          }
          //give userInfo in UserSlice
        } else {
          navigation.navigate('Login')
        }
      } catch (error) {
        console.error('Error retrieving data:', error)
      }
    }

    loadIsLogin()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Hello !!!</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    color: Colors.greenText,
    fontWeight: '800'
  }
})
