import { Image, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import GrayLine from '../../components/line/GrayLine'
import { Lato_BS_Text } from '../../components/Text/TextLato'
import AppButton from '../../components/AppButton'

import { useSelector } from 'react-redux'
import { updateUserInfo } from '../../api/UserAPI'


const EditProfile = ({navigation}) => {
  const appState = useSelector(state => state.app)
  const userInfo = appState.user

  const [userName, setUserName] = useState(userInfo.userName);
  const [email, setEmail] = useState(userInfo.email);
  const [address, setAddress] = useState(userInfo.deliveryAddress[0].address || ' ');
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);

  const hanldeUpdateInfo = async () => {
    const id = userInfo._id
    const info = {
      email:email,
      userName:userName,
      phoneNumber:phoneNumber
    }

    console.log(id,info);

    await updateUserInfo({id:id,info: info})
    // ToastAndroid.show('Updated',navigation.goBack())
  }

  return (
    <View style={styles.container}>
      <Header title={'chỉnh sửa thông tin'} />
      <View style={styles.body}>
        <Image style={styles.imgAvatar} source={{ uri: userInfo.linkAvatar }} />

        <Lato_BS_Text text={`Thông tin sẽ được lưu cho lần mua kế tiếp.\nBấm vào thông tin chi tiết để chỉnh sửa`} />

        <View style={styles.form}>
          <TextInput placeholder='name' onChangeText={setUserName} >{userName}</TextInput>
          <GrayLine />
          <TextInput placeholder='email' onChangeText={setEmail} >{email}</TextInput>
          <GrayLine />
          {/* <TextInput placeholder='address' onChangeText={setAddress} >{address}</TextInput>
          <GrayLine /> */}
          <TextInput placeholder='phone number' onChangeText={setPhoneNumber} >{phoneNumber}</TextInput>
          <GrayLine />
        </View>
        <AppButton text={'lưu thông tin'} isActive={userName && email && address && phoneNumber} onPress={hanldeUpdateInfo}/>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  body: {
    flex: 1,
    paddingHorizontal: 50,
  },
  imgAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: 'blue',
    alignSelf: 'center'
  },
  form: {
    marginTop: 35,
    flex: 1
  }
})