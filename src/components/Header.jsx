import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallIcon from './SmallIcon'

const Header = ({title,requireRight,onGoBack,onPressRightButton}) => {
  console.log('header re-render');
    return (
        <View style={styles.container}>
            <SmallIcon onPress={onGoBack} require={require('../assets/images/icons/back.png')}/>
            <Text style={styles.title}>{title}</Text>
            {requireRight &&
            <SmallIcon onPress={onPressRightButton} require={requireRight}/>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 55,
        width: '100%',
        flexDirection:'row',
        paddingVertical:11,
        alignItems:'center',
        paddingHorizontal:24
    },
    iconBack: {
        width:24,
        height:24
    },
    title: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        fontFamily: 'Lato',
        fontWeight: '500',
        textTransform: 'uppercase',
        lineHeight: 20,
        textAlign:'center'
    },
    rightIcon: {

    }
})
