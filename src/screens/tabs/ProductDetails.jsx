import { StyleSheet, Text, View, FlatList, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState, memo } from 'react'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import Carousel from 'pinar'
import numeral from 'numeral'
//component 
import AppButton from '../../components/AppButton'
import Line from '../../components/Line'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Count from '../../components/Count'
import Header from '../../components/Header'
import { Lato_BM_Text, Lato_BS_Text, Lato_BXL_Text, Lato_GrayS_Text, Lato_GreenM_Text, Lato_GreenS_Text, Lato_GreenXL_Text } from '../../components/Text/TextLato'
import GrayLine from '../../components/line/GrayLine'
import ButtonProps from '../../components/ButtonProps'
import { useRoute } from '@react-navigation/native'
//api
import { getProductById } from '../../api/ProductAPI'
//slice
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../redux/Reducer'

const ProductDetails = ({ navigation }) => {
  //Styles
  const getBtnPropsStyle = () => {
    return {
      marginRight: 8
    }
  }
  const getTextPriceStyle = () => {
    return {
      marginVertical: 17,
      marginBottom: 20
    }
  }
  const getLineStyle = () => {
    return {
      marginTop: 4
    }
  }
  const getStyleAppBtn = () => {
    return {
      marginTop: 15
    }
  }

  const dispatch = useDispatch()
  const route = useRoute()
  const { productId } = route.params

  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await getProductById(productId)
      console.log(result.linkImages)
      setProduct(result)
    }

    fetchAPI()
  }, [])
  const [count, setCount] = useState(1)


  const moveToCart = () => {
    navigation.navigate('Cart')
  }

  const showToastAddToCart = () => {
    ToastAndroid.show('Add to cart successful!', ToastAndroid.SHORT)
  }

  //Add to cart
  const addToCart = async () => {
    //1.update cart to api
    // const result = await updateCartAPI(data)
    //2.update cart in to slice
    dispatch(addItemToCart({
      id: product._id,
      linkImage: product.linkImages[0],
      price: product.price,
      name: product.name,
      quantity:count
    }))
    showToastAddToCart()
  }


  return (
    <View style={styles.container}>
      <Header title={product.name}
        onGoBack={() => { navigation.goBack() }}
        onPressRightButton={() => moveToCart()}
        requireRight={require('../../assets/images/icons/cart.png')} />
      <Carousel>
        {product.linkImages ?

          product.linkImages.map((item, index) =>
            <View style={styles.slide} key={index}>
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          )
          : null
        }
      </Carousel>
      <View style={styles.containerBody}>
        <View style={[styles.viewRow, { marginVertical: 15 }]}>
          <ButtonProps stylePosition={getBtnPropsStyle()} text={'Cây trồng'} />
          {product.prop && <ButtonProps text={product.prop} />}
        </View>

        <Lato_GreenXL_Text stylePosition={getTextPriceStyle()} text={numeral(product.price).format('0,0') + 'đ'} />
        <Lato_BM_Text text={'Chi tiết sản phẩm'} />
        <GrayLine stylePostion={getLineStyle()} />

        <View style={[styles.viewRow, { justifyContent: 'space-between', marginTop: 17 }]}>
          <Lato_BS_Text text={'Kích cỡ'} />
          <Lato_BS_Text text={'Nhỏ'} />
        </View>
        <GrayLine stylePostion={getLineStyle()} />

        <View style={[styles.viewRow, { justifyContent: 'space-between', marginTop: 17 }]}>
          <Lato_BS_Text text={'Xuất xứ'} />
          <Lato_BS_Text text={'Châu Phi'} />
        </View>
        <GrayLine stylePostion={getLineStyle()} />

        <View style={[styles.viewRow, { justifyContent: 'space-between', marginTop: 17 }]}>
          <Lato_BS_Text text={'Tình trạng'} />
          <Lato_GreenS_Text text={`Còn ${product.quantity} sp`} />
        </View>
        <GrayLine stylePostion={getLineStyle()} />
      </View>

      <View style={styles.containerFooter}>

        <View style={[styles.viewRow, { justifyContent: 'space-between' }]}>
          <Lato_GrayS_Text text={`Đã chọn ${count} sản phẩm`} />
          <Lato_GrayS_Text text={'Tạm tính'} />
        </View>

        <View style={[styles.viewRow, { justifyContent: 'space-between', marginTop: 15 }]}>
          <Count
            number={count}
            onMinusPress={() => { count !== 0 ? setCount(count - 1) : null }}
            onPlusPress={() => { setCount(count + 1) }} />
          <Lato_BXL_Text text={(count * product.price).toString()} />
        </View>

        <AppButton text={'Thêm vào giỏ hàng'}
          onPress={() => addToCart()}
          stylePosition={getStyleAppBtn()} isActive={count !== 0} />
      </View>
    </View>
  )
}

export default memo(ProductDetails)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 48
  },
  containerFooter: {
    height: 187,
    paddingHorizontal: 24,
    paddingVertical: 15
  },
  image: {
    width: '100%',
    height: 270
  },
  viewRow: {
    flexDirection: 'row'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a3c9a8'
  },
  text: {
    color: '#1f2d3d',
    opacity: 0.7,
    fontSize: 48,
    fontWeight: 'bold'
  }
})