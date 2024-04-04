import { Image, ScrollView, StyleSheet, TextInput, Touchable, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import GrayLine from '../../components/line/GrayLine'
import { Lato_BM_Text, Lato_BS_Text, Lato_GrayS_Text, Lato_GreenM_Text, Lato_GreenS_Text, Lato_GreenXL_Text, Lato_RM_Text } from '../../components/Text/TextLato'
import DarkLine from '../../components/DarkLine'
import AppButton from '../../components/AppButton'
import SmallIcon from '../../components/SmallIcon'
import { useRoute } from '@react-navigation/native'
import instance from '../../utils/InstanceAxios'
import { useSelector } from 'react-redux'
import { newOrder } from '../../api/OrderAPI'


const InfoTextInput = ({ placeholder, errText, isError, onChangeText, text }) => {
  return (
    <View>
      <TextInput placeholder={placeholder} underlineColorAndroid={'gray'} onChangeText={onChangeText}>{text}</TextInput>
      {isError ? <Lato_RM_Text text={errText} /> : null}
    </View>
  )
}

const Payment = ({ navigation }) => {
  const route = useRoute()
  const items = route.params

  const appSate = useSelector(state => state.app)
  const user = appSate.user

  const [name, setname] = useState(user.userName);
  const [mail, setmail] = useState(user.email);
  const [address, setaddress] = useState(user.deliveryAddress[0].address);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);

  const isValidInfoOrder = (name && mail && address && phoneNumber) !== ''

  const [deliveryMethod, setdeliveryMethod] = useState(0);
  const [paymentMethod, setpaymentMethod] = useState(0);

  const itemSelect = {
    title: 'Phương thức vận chuyển',
    listItem: [
      {
        name: 'Giao hàng nhanh',
        subName: 'Dự kiến giao hàng 5-7/8'
      },
      {
        name: 'Giao hàng nhanh',
        subName: 'Dự kiến giao hàng 5-7/8'
      },
    ],
  }
  const paymentSelect = {
    title: 'Phương thức thanh toán',
    listItem: [
      {
        name: 'Thanh toán khi nhận hàng',
      },
      {
        name: 'Thanh toán trả trước',
      },
    ],
  }

  const pay = async () => {
    const id = user._id
    const body = {
      receiverName: name,
      address: address,
      phoneNumber: phoneNumber,
      items: items
    }

    await newOrder({ id, body })

    navigation.navigate('MainTabs')
  }

  const SelectDeliveryMethod = ({ itemSelect }) => {
    return (
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Lato_BM_Text text={itemSelect.title} />
        {
          itemSelect.listItem.map((item, index) =>
            <TouchableOpacity style={{ flex: 1, marginVertical: 10 }} key={index} onPress={() => setdeliveryMethod(index)}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Lato_GreenS_Text text={item.name} />
                  <Lato_GrayS_Text text={item.subName} />
                </View>
                {deliveryMethod === index ? <SmallIcon require={require('../../assets/images/icons/checkBox/check.png')} /> : null}
              </View>
              <GrayLine />
            </TouchableOpacity>)
        }
      </View>
    )
  }
  const SelectPaymentMethod = ({ itemSelect }) => {
    return (
      <View style={{ marginBottom: 30, marginTop: 30 }}>
        <Lato_BM_Text text={itemSelect.title} />
        {
          itemSelect.listItem.map((item, index) =>
            <TouchableOpacity style={{ flex: 1, marginVertical: 10 }} key={index} onPress={() => setpaymentMethod(index)}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Lato_GreenM_Text text={item.name} />
                </View>
                {paymentMethod === index ? <SmallIcon require={require('../../assets/images/icons/checkBox/check.png')} /> : null}
              </View>
              <GrayLine />
            </TouchableOpacity>)
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title={'thanh toán'} />
      <ScrollView style={styles.body}>
        <Lato_BM_Text text={'Thông tin khách hàng'} />
        <DarkLine />
        <InfoTextInput placeholder={'name'} onChangeText={setname} text={name} />
        <InfoTextInput placeholder={'phone number'} onChangeText={setphoneNumber} text={phoneNumber} />
        <InfoTextInput placeholder={'email'} onChangeText={setmail} text={mail} />
        <InfoTextInput placeholder={'address'} errText={'nhap dia chi'} isError={false} text={address} onChangeText={setaddress} />

        <SelectDeliveryMethod itemSelect={itemSelect} />
        <SelectPaymentMethod itemSelect={paymentSelect} />

      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.viewRow}>
          <Lato_GrayS_Text text={'Tạm tính'} />
          <Lato_BS_Text text={'500.000 đ'} />
        </View>
        <View style={styles.viewRow}>
          <Lato_GrayS_Text text={'Phí vận chuyển'} />
          <Lato_BS_Text text={'500.000 đ'} />
        </View>
        <View style={styles.viewRow}>
          <Lato_GrayS_Text text={'Tổng cộng'} />
          <Lato_GreenM_Text text={'500.000 đ'} />
        </View>
        <AppButton text={'Tiếp tục'} isActive={isValidInfoOrder} onPress={pay} />
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    marginHorizontal: 48,
    marginTop: 15
  },
  footer: {
    padding: 24
  },
  viewRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  }
})