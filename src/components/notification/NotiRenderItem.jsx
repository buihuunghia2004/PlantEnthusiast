import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { Lato_BM_Text } from '../../components/Text/TextLato'
import NotiChildItem from '../../components/notification/NotiChildItem'
import BLine from '../../components/line/BLine'

const NotiRenderItem = (data, index) => {
    const { date, list } = data

    const renderItem = ({ item }) => (
        <NotiChildItem isSuccess={item.isSuccess} name={item.name} />
      );

    return (
        <View style={styles.containerItem}>
            <Lato_BM_Text text={date} />
            <BLine />
            <FlatList
                data={list}
                renderItem={renderItem}
            />
        </View>
    )
}

export default NotiRenderItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
    containerBody: {
        flex: 1,
    },
    containerItem: {
        justifyContent: 'center',
        margin: 7,
        backgroundColor: 'white',
    },
    containerInfoItem: {
        height: '80%',
        justifyContent: 'space-around',

    },
    imgItem: {
        width: 74, height: 74,
        borderRadius: 10,
        marginRight: 15,
        backgroundColor: '#F6F6F6'
    },
    viewRow: {
        flexDirection: 'row'
    }
})