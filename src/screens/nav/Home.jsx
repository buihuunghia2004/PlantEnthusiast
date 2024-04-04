import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SmallIcon from '../../components/SmallIcon'
import { Lato_BM_Text, Lato_BXL_Text, Lato_GrayS_Text, Lato_GreenM_Text } from '../../components/Text/TextLato'
import ItemProductHome from '../../components/item/ItemProductHome'
//api
import { getProductHome } from '../../api/ProductAPI'
import AsyncStorage from '@react-native-community/async-storage'
import { getUserInfo } from '../../api/UserAPI'
import { useDispatch } from 'react-redux'
import { loadUser } from '../../redux/Reducer'


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  //___________STYLES__________________
  const getStyle1 = () => {
    return {
      lineHeight: 37
    }
  }
  const moreTextStyle = () => {
    return {
      textDecorationLine: 'underline',
      textAlign: 'right',
      marginRight: 24
    }
  }
  const titleTextStyle = () => {
    return {
      marginLeft: 24
    }
  }
  //__________ROUTE_ACTION_______________
  const moveToProductDetails = (product) => {
    navigation.navigate('ProductDetails', { productId: product._id })
  }
  const moveToProductCategory = (productIndex) => {
    navigation.navigate('ProductCategory', { productIndex: productIndex })
  }
  const moveToCart = () => {
    navigation.navigate('Cart')
  }
  //_____________REDUX_______________
  useEffect(() => {
    const fetchAllData = async () => {
      const result = await getProductHome()
      setData(result)
    }

    fetchAllData()
  }, [])

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
          }
          //give userInfo in UserSlice
        }
      } catch (error) {
        console.error('Error retrieving data:', error)
      }
    }

    loadIsLogin()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image style={styles.imgHeader} source={require('../../assets/images/backgroundHome.png')} />
        <TouchableOpacity style={styles.containerCart} onPress={moveToCart}>
          <Image style={{ width: 24, height: 24 }} source={require('../../assets/images/icons/cart.png')} />
        </TouchableOpacity>
        <View style={{ margin: 24, width: 250 }}>
          <Lato_BXL_Text text={'Planta - tỏa sáng\nkhông gian nhà bạn'} stylePosition={getStyle1()} />
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }} onPress={() => moveToProductCategory('Plants')}>
            <Lato_GreenM_Text text={'Xem hàng mới về    '} />
            <SmallIcon require={require('../../assets/images/icons/green_arrow_right.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerBody}>
        {
          data.map((item, index) =>
            <View style={{ flex: 1, marginBottom: 80 }} key={index}>
              <Lato_BXL_Text stylePosition={titleTextStyle()} text={item.category} />
              <ItemProductHome data={item.products.slice(0, 6)} onPress={moveToProductDetails} />
              <Lato_BM_Text stylePosition={moreTextStyle()} text={'Xem thêm cây trồng'}
                onPress={() => moveToProductCategory(index)} />
            </View>)
        }
      </View>

      <View style={{ padding: 24 }}>
        <Lato_BXL_Text text={'Combo chăm sóc (mới)'} />
        <View style={{ flexDirection: 'row', width: '100%', borderRadius: 10 }}>
          <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
            <Lato_BM_Text text={'Lemon Balm Grow Kit '} />
            <Lato_GrayS_Text text={'Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...'} />
          </View>
          <Image source={require('../../assets/images/combo.png')} style={{ width: 108, height: 134, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerHeader: {
    top: 0,
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 318,
  },
  containerBody: {
    flex: 1
  },
  containerCart: {
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 20
  },
  imgHeader: {
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  containerItemPlant: {
    width: 160,
    height: 220,
    margin: 10
  },
  imgPlant: {
    width: 155,
    height: 134,
    backgroundColor: '#F5F5F5'
  },
  namePlant: {
    color: '#221F1F',
    fontSize: 16,
    fontFamily: 'Lato-Medium',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word'
  },
  priceProduct: {
    color: '#007537',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word'
  },
  propsPlant: {
    color: '#7D7B7B',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    lineHeight: 20,
    wordWrap: 'break-word'
  },
  title: {
    color: '#221F1F',
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 34,
    wordWrap: 'break-word'
  },
  viewMore: {
    color: '#221F1F',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
    textDecorationLine: 'underline',
    lineHeight: 20,
    wordWrap: 'break-word'
  }
})
