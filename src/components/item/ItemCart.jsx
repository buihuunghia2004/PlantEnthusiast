import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallIcon from '../SmallIcon'
import { Lato_BM_Text, Lato_GrayS_Text, Lato_GreenM_Text } from '../Text/TextLato'
import Count from '../Count'

const ItemCart = (props) => {
  const { onPressTick, item, onIncPress, onDesPress, onRemovePress, isTick } = props
  console.log(item, 'item')
  const removeTextStyle = () => {
    return {
      textDecorationLine: 'underline',
      marginLeft: 38
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'center', marginHorizontal: 28 }}>
        <SmallIcon onPress={onPressTick} require={isTick ? require('../../assets/images/icons/checkBox/stick.png') :  require('../../assets/images/icons/checkBox/unStick.png')} />
      </View>
      <Image style={styles.image} source={{ uri: item.linkImage }} />
      <View style={{ alignSelf: 'center', height: 80, justifyContent: 'space-between' }}>
        <View style={[styles.containerRow, { alignItems: 'center' }]}>
          <Lato_BM_Text text={item.name} />
          <Text style={{ color: 'black', marginHorizontal: 5, fontSize: 18 }}>|</Text>
          <Lato_GrayS_Text text={'Ưa bóng'} />
        </View>
        <Lato_GreenM_Text text={item.price + 'đ'} />
        <View style={[styles.containerRow, { alignItems: 'center', marginTop: 10 }]}>
          <Count number={item.quantity} onMinusPress={onDesPress} onPlusPress={onIncPress} />
          <Lato_BM_Text text={'Xóa'} stylePosition={removeTextStyle()} onPress={onRemovePress}/>
        </View>
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    marginBottom: 15
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginRight: 15
  },
  containerRow: {
    flexDirection: 'row',
  }
})