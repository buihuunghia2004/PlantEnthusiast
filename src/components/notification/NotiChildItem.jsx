import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Lato_BM_Text, Lato_BS_Text, Lato_GrayS_Text, Lato_GreenM_Text, Lato_RM_Text } from '../Text/TextLato'

const NotiChildItem = (data,index) => {
    const {isSuccess,quantity,name} = data;
    return (
        <View style={styles.containerItem}>
            <Image
                style={styles.imgItem}
                source={require('../../assets/images/productDemo.png')} />
            <View style={styles.containerInfoItem}>
                {isSuccess ? <Lato_GreenM_Text text={'Đặt hàng thành công'} /> : <Lato_RM_Text text={'Đặt hàng thất bại'} />}
                <View style={styles.viewRow}>
                    <Lato_BM_Text text={name+' | '}/>
                    <Lato_GrayS_Text text={'Ưa bóng'} />
                </View>
                <Lato_BS_Text text={' sản phẩm'} />
            </View>
        </View>
    )
}

export default NotiChildItem

const styles = StyleSheet.create({
    containerItem: {
        width: 279,
        height: 74,
        flexDirection: 'row',
        margin: 7
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
        flexDirection: 'row',
        alignItems:'center'
    }
})