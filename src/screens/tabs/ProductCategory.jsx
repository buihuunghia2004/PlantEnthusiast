import { StyleSheet, View, ScrollView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ButtonProps from '../../components/ButtonProps'
import { Lato_GrayS_Text } from '../../components/Text/TextLato'
import ItemProductHome from '../../components/item/ItemProductHome'
import { CATEGORY_PLANTS_ID, CATEGORY_POTS_ID, CATEGORY_ACCESSORY_ID, CATEGORY } from '../../utils/Config'
import { getProductByCategoryId } from '../../api/ProductAPI'

//redux

const ProductCategory = ({ navigation, route }) => {
  const { productIndex } = route.params
  //
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [category, setCategory] = useState(0)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const PRODUCT_TITLE = productIndex === 0 ? 'Cây trồng' : productIndex === 1 ? 'Chậu cây trồng' : 'Phụ kiện chăm sóc';
  const categoryId = productIndex === 0 ? CATEGORY_PLANTS_ID : productIndex === 1 ? CATEGORY_POTS_ID : CATEGORY_ACCESSORY_ID;
  //redux

  //FUNTION
  useEffect(() => {
    const fetchData = async () => {
      const query = {
        categoryId:categoryId,
        page:page,
        limit:8
      }
      const result = await getProductByCategoryId(query)
      console.log(result);
      setData(result)
    }
    fetchData()
  }, []);


  //STYLES
  const getBtnPropStyle = () => {
    return {
      marginRight: 10
    }
  }

  const handleScroll = async (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent
    const isBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 10
    console.log(isAtBottom)
    setIsAtBottom(isBottom)

    await fetchData()
  }

  return (
    <View style={styles.container}>
      <Header
        onGoBack={() => navigation.goBack()}
        onPressRightButton={() => navigation.navigate('Cart')}
        title={PRODUCT_TITLE}
        requireRight={require('../../assets/images/icons/cart.png')} />

      {
        productIndex === 0 ?
          <View style={styles.containerListCategory}>

            {category === 0
              ? <ButtonProps stylePosition={getBtnPropStyle()} text={'Tất cả'} />
              : <Lato_GrayS_Text onPress={() => setCategory(0)} text={'Tất cả'} />
            }
            {category === 1
              ? <ButtonProps stylePosition={getBtnPropStyle()} text={'Hàng mới về'} />
              : <Lato_GrayS_Text onPress={() => setCategory(1)} text={'Hàng mới về'} />
            }
            {category === 2
              ? <ButtonProps stylePosition={getBtnPropStyle()} text={'Ưa sáng'} />
              : <Lato_GrayS_Text onPress={() => setCategory(2)} text={'Ưa sáng'} />
            }
            {category === 3
              ? <ButtonProps stylePosition={getBtnPropStyle()} text={'Ưa bóng'} />
              : <Lato_GrayS_Text onPress={() => setCategory(3)} text={'Ưa bóng'} />
            }
          </View> :
          null
      }
      <ScrollView onScroll={handleScroll}>
        <ItemProductHome data={data.products} />
      </ScrollView>
      {isAtBottom && <Text>Loadding....</Text>}
    </View>
  )
}

export default ProductCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  containerListCategory: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 24,
  },

})