import { StyleSheet, Text, View, Modal } from 'react-native'
import React from 'react'
import AppButton from './AppButton'
import { Lato_BM_Text, Lato_GrayS_Text } from './Text/TextLato'

const AppModal = ({ title, subTitle,visible, onOK, onCancel }) => {
  const getStyleSubTitle = () => {
    return {
      marginTop: 8,

    }
  };
  const getStyleOK = () => {
    return {
      marginTop: 16,
    }
  };
  const getStyleCancel = () => {
    return {
      marginTop: 16,
      textDecorationLine: 'underline',
    }
  };
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Lato_BM_Text text={title} />
          <Lato_GrayS_Text text={subTitle} stylePosition={getStyleSubTitle()} />
          <AppButton isActive={true} text={'Đồng ý'} stylePosition={getStyleOK()} onPress={onOK}/>
          <Lato_BM_Text text={'Hủy bỏ'} stylePosition={getStyleCancel()} onPress={onCancel}/>
        </View>
      </View>
    </Modal>

  )
}

export default AppModal

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.5)',
    paddingHorizontal:24
  },
  modalContainer: {
    position:'absolute',
    bottom:50,
    width:'100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
