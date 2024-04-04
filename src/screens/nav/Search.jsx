import { Image, StyleSheet, Text, View, TouchableOpacity,FlatList,TextInput } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import Header from '../../components/Header'
import SmallIcon from '../../components/SmallIcon'
import DarkLine from '../../components/DarkLine'
import { Lato_BM_Text, Lato_BS_Text } from '../../components/Text/TextLato'
import { Context } from '../../context/Context'
import { searchProduct } from '../../api/ProductAPI'

const Search = ({ navigation }) => {
  const [key, setKey] = useState('')
  const [isFocus, setFocus] = useState(false)
  const [result, setResult] = useState([])

  useEffect(() => {
    const searching = async () => {
      const res = await searchProduct(key)
      setResult(res)
    }
    searching()
  }, [key])

  const onItemProducPress = (id) => {
    navigation.navigate('ProductDetails', { productId: id })
  }

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: '100%', height: 24, marginBottom: 19, flexDirection: 'row' }}>
        <SmallIcon require={require('../../assets/images/icons/clock.png')} />
        <Text style={{ flex: 1, color: 'black', paddingHorizontal: 20 }}>{item}</Text>
        <SmallIcon require={require('../../assets/images/icons/quit.png')} />
      </View>
    )
  }

  const renderItem2 = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemRenderProduct} onPress={() => onItemProducPress(item._id)}>
        <Image source={{ uri: item.linkImages[0] }} style={{ width: 77, height: 77 }} />
        <View style={{ justifyContent: 'space-between', marginHorizontal: 15, height: 65 }}>
          <Lato_BM_Text text={item.name} />
          <Lato_BM_Text text={item.price + ' đ'} />
          <Lato_BS_Text text={'Còn 156 sp'} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      <Header title={'TÌM KIẾM'} />

      <View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={setKey} style={{ flex: 1 }} placeholder='Tìm kiếm' />
          <SmallIcon require={require('../../assets/images/icons/search.png')} />
        </View>
        <DarkLine />
      </View>

      <Text style={styles.SearchNear}>Tìm kiếm gần đây</Text>

      {/* {key.length === 0 ? <FlatList
        data={myContext.searchHistory}
        renderItem={renderItem}
      /> :
        <FlatList
          data={result}
          renderItem={renderItem2}
        />} */}

      {key.length !== 0 ? <FlatList
        data={result}
        renderItem={renderItem2}
      /> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  SearchNear: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: '500',
    lineHeight: 22,
    marginVertical: 40,
  },
  itemRenderProduct: {
    alignItems: 'center',
    width: '100%',
    height: 110,
    marginBottom: 10,
    flexDirection: 'row'
  }
})