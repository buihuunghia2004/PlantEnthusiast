import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
//lib
import LinearGradient from 'react-native-linear-gradient';
//components
import AppStyles from '../../components/AppStyle'
import AppContainer from '../../components/AppConntainer'
import TextPoppins from '../../components/TextPoppins'
import AppInput from '../../components/AppInput'
//api
import { login } from '../../api/UserAPI';

//redux
import { useDispatch } from 'react-redux'
import { loadUser } from '../../redux/Reducer';


//asyncStorage
import AsyncStorage from '@react-native-community/async-storage';
import { ERROR_LOGIN } from '../../utils/Constant';

const Login = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch()
  //styles
  const getContainerMainStyle = () => {
    return {
      ...AppStyles.containerMain
    }
  }
  const getTextWelcomStyle = () => {
    return {
      ...AppStyles.textPoppins,
      fontSize: 30,
      fontWeight: '700',
      marginTop: 315,
      alignSelf: 'center'
    }
  }
  const getTextLoginStyle = () => {
    return {
      ...AppStyles.textPoppins,
      fontSize: 18,
      fontWeight: '400',
      alignSelf: 'center'
    }
  }
  const getStyleInputEmailStyle = () => {
    return {
      marginTop: 20
    }
  }
  const getStyleInputPasswordStyle = () => {
    return {
      marginTop: 10
    }
  }
  const getStyleTextRememberAccount = () => {
    return {
      ...AppStyles.textPoppins,
      fontSize: 11,
      color: '#949090',
      alignSelf: 'center',
      flex: 1,
      marginLeft: 5
    }
  }
  const getTextForgotPasswordStyle = () => {
    return {
      ...AppStyles.textPoppins,
      fontSize: 11,
      color: '#007537',
      fontWeight: '500'
    }
  }

  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberAccount, setRememberAccount] = useState(false);
  const [errorTextEmai, setErrorTextEmail] = useState('');
  const [errorTextPassword, setErrorTextPassword] = useState('');

  //Login
  const handleLogin = async () => {
    //call api login
    const body = { email, password }
    const result = await login(body)

    if (result.status) {
      //save status login to AsyncStorage
      await saveIslogin(result.data._id);

      dispatch(loadUser(result.data))
    } else {
      if (result.statusCode === ERROR_LOGIN.WRONG_PASSWORD) {
        setErrorTextEmail('')
        setErrorTextPassword(result.message)
      } else {
        setErrorTextEmail(result.message)
        setErrorTextPassword('')
      }
    }
  };

  //reudux
  // const appState = useSelector(state => state.app);
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   try {
  //     const body = { email, password };
  //     console.log(email, body);
  //     dispatch(login(body));
  //   } catch (error) {
  //   }
  // }


  const saveIslogin = async (id) => {
    try {
      await AsyncStorage.setItem('idLogin', id);
    } catch (error) {
      console.log('AsyncStorage Login error: ',error);
    }
  };

  const goRegister = () => {
    navigation.navigate('Register');
  }
  //funtions
  return (
    <View style={styles.container}>
      <AppContainer styles={{
        container: getContainerMainStyle()
      }} >
        <TextPoppins text={'Chào mừng bạn'} styles={{ text: getTextWelcomStyle() }} />

        <TextPoppins text={'Đăng nhập tài khoản'} styles={{ text: getTextLoginStyle() }} />

        <AppInput
          onChangeText={(a) => setEmail(a)}
          stylePosition={{ stylePosition: getStyleInputEmailStyle() }}
          placeholder={'Nhập email hoặc số điện thoại'}
          errorText={errorTextEmai} />

        <AppInput
          onChangeText={(a) => setPassword(a)}
          stylePosition={{ stylePosition: getStyleInputPasswordStyle() }}
          placeholder={'Mật khẩu'}
          isPassword={true}
          errorText={errorTextPassword} />

        <View style={[styles.containerRow, { marginTop: 15 }]}>
          <Pressable onPress={() => setRememberAccount(!rememberAccount)}>
            <Image style={styles.imgIconCheck} source={rememberAccount ? require('../../assets/images/icons/notRememberCheck.png') : require('../../assets/images/icons/rememberCheck.png')} />
          </Pressable>
          <TextPoppins text={'Nhớ tài khoản'} styles={{ text: getStyleTextRememberAccount() }} />
          <TextPoppins text={'Quên mật khẩu'} styles={{ text: getTextForgotPasswordStyle() }} />
        </View>

        <Pressable onPress={handleLogin} style={{ marginTop: 24 }}>
          <LinearGradient colors={['#007537', '#4CAF50']} start={{ x: 0.0, y: 1 }} end={{ x: 1, y: 1.0 }} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Đăng nhập
            </Text>
          </LinearGradient>
        </Pressable>

        <View style={[styles.containerRow, { marginTop: 21 }]}>
          <View style={styles.line} />
          <Text style={styles.textOr}>Hoặc</Text>
          <View style={styles.line} />
        </View>

        <View style={[styles.containerRow, { marginTop: 35 }]}>
          <Image style={styles.iconLogin} source={require('../../assets/images/icons/google.png')} />
          <Image style={styles.iconLogin} source={require('../../assets/images/icons/facebook.png')} />
        </View>

        <View style={styles.containerRow}>
          <Text style={styles.textOr}>Bạn không có tài khoản</Text>
          <Text onPress={goRegister} style={styles.textCreateAccount}> Tạo tài khoản</Text>
        </View>
      </AppContainer>
      {/* img backgound */}
      <Image style={styles.imageBackground} source={require('../../assets/images/background.png')} />

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  imageBackground: {
    width: '100%',
    height: 345,
    position: 'absolute',
    top: -30,
  },
  imgIconCheck: {
    width: 22,
    height: 22
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#4CAF50'
  },
  textOr: {
    color: 'black',
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 10
  },
  iconLogin: {
    width: 32,
    height: 32,
    marginHorizontal: 15,
    alignSelf: 'center'
  },
  alignItemcenter: {
    alignSelf: 'center'
  },
  textCreateAccount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#009245'
  }
})
