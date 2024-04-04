import { StyleSheet } from 'react-native'
//colors
import {Colors, theme} from '../theme'


const AppStyles = StyleSheet.create({
    containerMain:{
      flex:1,
      backgroundColor:Colors.backgound,
      padding:24
    },
    textPoppins:{
      color:'black',
      fontFamily:'Poppins-Bold',
    }
});

export default AppStyles;

