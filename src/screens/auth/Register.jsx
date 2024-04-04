import { StyleSheet, Text, View, Image, Pressable, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
//lib
import LinearGradient from 'react-native-linear-gradient';
//api
import { register } from '../../services/AuthAPI';
//components
import AppStyles from '../../components/AppStyle'
import AppContainer from '../../components/AppConntainer'
import TextPoppins from '../../components/TextPoppins'
import AppInput from '../../components/AppInput'

const Register = ({ navigation }) => {
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
      marginTop: 180,
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
  };
  //
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordlError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const emailRegex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const nameRegex = /^\w+$/;
  const passwordRegex = /^[a-zA-Z0-9]{6,30}$/;
  const phoneNumerRegex = /^0[0-9]{9}$/;

  //funtions

  const handleRegister = async () => {
    try {

      // if (nameIsValid && emailIsValid && passwordIsValid && phoneNumberIsValid) {
        const user = {
          userName: name,
          email: email,
          phoneNumber: phoneNumber,
          password: password
        };
        const newUser = await register(user);
        if (newUser) {
          ToastAndroid.show('Register successful', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          setTimeout(() => {
            navigation.goBack();
          }, 1500);
        }
      // } else {

      // }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <AppContainer styles={{
        container: getContainerMainStyle()
      }} >
        <TextPoppins text={'Đăng ký'} styles={{ text: getTextWelcomStyle() }} />

        <TextPoppins text={'Tạo tài khoản'} styles={{ text: getTextLoginStyle() }} />

        <AppInput
          onChangeText={setName}
          errorText={nameError}
          placeholder={'Họ tên'} />

        <AppInput
          onChangeText={setEmail}
          errorText={emailError}
          placeholder={'E-mail'} />

        <AppInput
          onChangeText={setPhoneNumber}
          errorText={phoneNumberError}
          placeholder={'Số điện thoại'} />

        <AppInput
          onChangeText={setPassword}
          placeholder={'Mật khẩu'}
          isPassword={true}
          errorText={passwordError} />

        <View style={[styles.containerRow, { marginTop: 15, justifyContent: 'center' }]}>
          <Text style={styles.smallText}>
            Để đăng ký tài khoản, bạn đồng ý{<Text style={styles.smallTextLink}>Terms & {'\n'}Conditions </Text>} and {<Text style={styles.smallTextLink}>Privacy Policy</Text>}
          </Text>
        </View>

        <Pressable style={{ marginTop: 24 }} onPress={() => { handleRegister() }}>
          <LinearGradient colors={['#007537', '#4CAF50']} start={{ x: 0.0, y: 1 }} end={{ x: 1, y: 1.0 }} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Đăng ký
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
          <Text style={styles.textOr}>Tôi đã có tài khoản</Text>
          <Text style={styles.textCreateAccount}> Đăng nhập</Text>
        </View>
      </AppContainer>
      {/* img backgound */}
      <Image style={styles.imageBackground} source={require('../../assets/images/a.png')} />

    </View>
  )
}

export default Register

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
    position: 'absolute',
    width: '100%',
    height: 400,
    top: -180
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
  },
  smallText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppines-Regular',
    fontWeight: '400',
    textAlign: 'center'
  },
  smallTextLink: {
    color: '#009245',
    fontSize: 14,
    fontFamily: 'Poppines-Regular',
    fontWeight: '400',
    textDecorationLine: 'underline'
  }
})