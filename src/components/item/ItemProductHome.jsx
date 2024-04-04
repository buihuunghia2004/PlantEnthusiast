import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React,{memo} from 'react'
import { Lato_BM_Text, Lato_GrayS_Text, Lato_GreenM_Text } from '../Text/TextLato'

const ItemProductHome = (props) => {
  const { data, onPress } = props

  const numColumns = 2
  const screenWidth = Dimensions.get('window').width
  const itemWidth = (screenWidth - 16 * (numColumns + 1)) / numColumns

  const renderItemChild = ({ item }) => {
    return (
      <View style={[styles.item, { width: itemWidth }]}>
        <TouchableOpacity style={styles.containerItem} onPress={() => onPress(item)}>
          <Image source={{ uri: item.linkImages[0] }} style={styles.image} />
          <View style={styles.containerInfo}>
            <Lato_BM_Text text={item.name} />
            {item.prop && <Lato_GrayS_Text text={item.prop} />}
            <Lato_GreenM_Text text={item.price} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.containerList}>
      <FlatList scrollEnabled={false}
        data={data}
        renderItem={renderItemChild}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      // keyExtractor={(item)=>item.name}
      />
    </View>
  )
}

export default memo(ItemProductHome)

const styles = StyleSheet.create({
  containerList: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  flatList: {
    paddingHorizontal: 16,
  },
  item: {
    padding: 16,
    // marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerItem: {
    width: 155,
    height: 190
  },
  image: {
    width: 160,
    height: 140,
    backgroundColor: '#d2d5d9',
    borderRadius: 10
  },
  containerInfo: {
    width: 155,
    height: 64,
    marginTop: 4,
    justifyContent: 'space-around',
    paddingHorizontal: 5
  }
})