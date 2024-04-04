import { Image, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../theme'
import AppModal from '../../components/AppModal'
import { Lato_BM_Text, Lato_BXL_Text, Lato_GrayL_Text, Lato_GrayS_Text, Lato_RM_Text } from '../../components/Text/TextLato'
import GrayLine from '../../components/line/GrayLine'
import { launchImageLibrary } from 'react-native-image-picker'
import { launchCamera } from 'react-native-image-picker'
import AsyncStorage from '@react-native-community/async-storage'


//Redux
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/Reducer'

const Profile = ({navigation}) => {
  //Get userInfo from UserSlice-Redux
  const appState = useSelector(state => state.app)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await AsyncStorage.removeItem('idLogin')
    dispatch(logout())
  }

  const [modalVisible, setModalVisible] = useState(false)
  //data
  const data = [
    {
      title: 'Chung',
      details: [
        'Chỉnh sủa thông tin',
        'Cẩm nang cây trồng',
        'Lịch sử giao dịch',
        'Q & A'
      ]
    },
    {
      title: 'Bảo mật và Điều khoản',
      details: [
        'Điều khoản và điều kiện',
        'Chính sách quyền riêng tư'
      ]
    }
  ];
  //styles
  const getHeaderStyle = () => {
    return {
      textAlign: 'center',
      marginVertical: 18
    }
  };
  const getDetailStyle = () => {
    return {
      marginBottom: 15
    }
  };
  //events


  const onModalLogout = () => {
    setModalVisible(true);
  };
 
  const onItemClick = (i, j) => {
    const conbinedValue = i + '-' + j;
    switch (conbinedValue) {
      case '0-0':
        navigation.navigate('EditProfile')
        break;
      case '0-1':
        console.log('Cẩm nang cây trồng');
        break;
      case '0-2':
        console.log('Lịch sử giao dịch');
        break;
      case '0-3':
        console.log('Q & A');
        break;
      case '1-0':
        console.log('dk');
        break;
      case '1-1':
        console.log('Cs');
        break;
      default:
        console.log('lỗi đây nè má!');
        break;
    }
  };
  
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Lato_BM_Text stylePosition={getHeaderStyle()} text={'PROFILE'} />

      <View style={styles.containerInfo}>
        <Image style={styles.avatar} source={{ uri: 'https://ss-images.saostar.vn/w800/2016/02/15/278747/1-1.jpg' }} />
        <View>
          {/* <Lato_BM_Text text={userInfo.username} /> */}
          <Lato_GrayS_Text text={'buihuunghia@gmail.com'} />
        </View>
      </View>


      {
        data.map((item, indexI) =>
          <View key={indexI} style={{ marginBottom: 25 }}>
            <Lato_GrayL_Text stylePosition={getDetailStyle()} text={item.title} />
            <GrayLine stylePostion={getDetailStyle()} />
            {
              item.details.map((itemDetails, indexJ) => <Lato_BM_Text
                key={indexJ}
                onPress={() => onItemClick(indexI, indexJ)}
                stylePosition={getDetailStyle()} text={itemDetails} />)
            }
          </View>)
      }
      <Lato_RM_Text text={'Đăng xuất'} onPress={() => onModalLogout()} />
      {/* <Button title="Choose from Device" onPress={openImagePicker} />
      <Button title="Open Camera" onPress={handleCameraLaunch} /> */}

      <AppModal
        visible={modalVisible}
        title={'Xác nhận đăng xuất tài khoản'}
        subTitle={'Bạn sẽ đăng xuất ra khỏi tài khoản này'}
        onCancel={() => setModalVisible(false)}
        onOK={() => handleLogout()} />

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgound,
    paddingHorizontal: 24,
  },
  containerInfo: {
    flexDirection: 'row',
    height: 75,
    paddingVertical: 15
  },
  containerBody: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 24, backgroundColor: 'red'
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Lato-Medium',
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingVertical: 17,
    alignSelf: 'center',
  },
  avatar: {
    width: 39,
    height: 39,
    backgroundColor: 'red',
    marginRight: 24,
    borderRadius: 50
  },
  s: {
    marginVertical: 50
  }
})