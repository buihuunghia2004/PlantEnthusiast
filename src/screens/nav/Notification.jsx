import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import DarkLine from '../../components/DarkLine'
import { Colors } from '../../theme'

const Notification = () => {
  const appSate = useSelector(state => state.app)
  const orders = appSate.user.orders
  const [currentProcess, setCurrentProcess] = useState(1);

  console.log(orders[0].currentStatus,'orser');
  console.log(currentProcess);

  const orderFiltered = orders.filter(item => item.currentStatus.process === currentProcess)


  const fakeData = [
    { title: 'Chờ xác nhận' ,process:1},
    { title: 'Đang xử lý'  ,process:2},
    { title: 'Đang giao hàng'  ,process:3},
    { title: 'Đã giao hàng' ,process:4 },
    { title: 'Đã hủy' ,process:-1 },
    { title: 'Trả hàng' ,process:-2 }
  ]

  const renderItemOrder = ({ item }) => {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.timeStamp}>{item.status[0].timeStamp}</Text>
        <DarkLine />

        {item.items.map(item => (
          <View style={{ flexDirection: 'row' }}>
            <Image style={{ width: 80, height: 80 }} source={{ uri: item.linkImage }} />
            <View>
              <Text style={{ color: 'black' }}>{item.name}</Text>
              <Text style={{ color: Colors.greenMain }}>{item.price}</Text>
              <Text style={{ color: 'black' }}>{item.quantity + ' sản phẩm'}</Text>
            </View>
          </View>
        ))}
        <Text style={{ color: Colors.greenMain, fontSize: 20, textAlign: 'right' }} >{'Tổng tiền: ' + item.total + ' đ'}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ height: 60, justifyContent: 'center', marginRight: 20 }} onPress={() => setCurrentProcess(item.process)} key={item.id}>
        <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.process}
        />
      </View>
      <FlatList
        data={orderFiltered}
        renderItem={renderItemOrder}
        keyExtractor={(item => item.id)}
      />

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 30,
    marginBottom:30,
    marginTop:10
  },
  timeStamp: {
    color: 'black'
  }
})