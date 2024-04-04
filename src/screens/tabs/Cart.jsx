import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useReducer } from 'react'
//Component
import Header from '../../components/Header'
import ItemCart from '../../components/item/ItemCart'
import { Lato_BM_Text, Lato_GrayS_Text } from '../../components/Text/TextLato'
import AppButton from '../../components/AppButton'
import AppModal from '../../components/AppModal'
//Slice-Redux
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemToCart } from '../../redux/Reducer'

const Cart = ({ navigation }) => {
  //constant
  const DETELE_ALL_PRODUCT = 1
  const PAY = 2
  const DELETE_A_PRODUCT = 3
  const CANCLE_MODAL = -1
  //slice
  const dispatchCart = useDispatch()
  const userInfo = useSelector(state => state.app)
  const data = userInfo.user.cart

  const [activeProducts, setActiveProduct] = useState(data.map(item => false))
  const totalPrice = data.reduce((total, currentProduct, currentIndex) => {
    if (activeProducts[currentIndex]) {
      return total + currentProduct.price * currentProduct.quantity
    }
    return total
  }, 0)

  const itemStick = (index) => {
    const activeProductsCopy = [...activeProducts]
    activeProductsCopy.splice(index, 1, !activeProducts[index])
    setActiveProduct(activeProductsCopy)
  }

  //Button_Back
  const back = () => {
    navigation.goBack()
  }

  //Items Cart
  const rederItem = ({ item, index }) => {
    const product = item
    console.log(product);

    return (
      <ItemCart item={item} isTick={activeProducts[index]}
        onPressTick={() => { itemStick(index) }}
        onIncPress={() => { dispatchCart(addItemToCart({ id: product.id, quantity: 1 })) }}
        onDesPress={() => { dispatchCart(addItemToCart({ id: product.id, quantity: -1 })) }}
        onRemovePress={() => { dispatchCart(removeItemToCart({ id: product.id })) }} />
    )
  }
  
  const getActiveProduct = () => {
    const items = data.map((item, index) => {
      if (activeProducts[index]) {
        return {id:item.id, quantity: item.quantity}
      }
      return null
    }).filter(item => item !== null)

    navigation.navigate('Payment', items)
  }

  //Pay_Modal
  const reducer = (state, action) => {
    switch (action) {
      case DETELE_ALL_PRODUCT: // Xóa đơn hàng
        return {
          title: 'Xác nhận xóa tất cả đơn hàng',
          subTitle: 'Thao tác này sẽ không thể khôi phục',
          action: () => updateMyCart({ action: ActionCart.CLEAR }),
          isVisibleModal: true
        }
      case PAY: // Thanh toán đơn hàng
        return {
          title: 'Xác nhận thanh toán đơn hàng',
          subTitle: 'Xác nhận thanh toán?',
          action: () => getActiveProduct(),
          isVisibleModal: true
        }
      case DELETE_A_PRODUCT: // Xóa 1 sản phẩm
        return {
          title: 'Xác nhận thanh toán đơn hàng',
          subTitle: 'Xác nhận thanh toán?',
          isVisibleModal: true
        }
      default: // Ẩn modal
        return {
          isVisibleModal: false
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    isVisibleModal: false
  })

  return (
    <View style={styles.container}>
      <Header title={'GIỎ HÀNG'} requireRight={require('../../assets/images/icons/trash.png')}
        onGoBack={back}
        onPressRightButton={() => dispatch(DETELE_ALL_PRODUCT)}
      />

      <View style={styles.body}>
        <FlatList
          data={data}
          renderItem={item => rederItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Lato_GrayS_Text text={'Tạm tính'} />
          <Lato_BM_Text text={totalPrice + ' đ'} />
        </View>
        <AppButton text={'Tiến hành thanh toán'} isActive={totalPrice !== 0} onPress={() => dispatch(PAY)} />
      </View>
      <AppModal title={state.title} subTitle={state.subTitle} visible={state.isVisibleModal} onCancel={() => dispatch(CANCLE_MODAL)} onOK={() => { state.action(), dispatch(CANCLE_MODAL) }}>
      </AppModal>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  },
  footer: {
    height: 130,
    paddingHorizontal: 28
  }
})