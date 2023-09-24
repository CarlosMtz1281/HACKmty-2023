import { colors } from '../../assets/constants'
import { StyleSheet } from "react-native-web";

const style = StyleSheet.create({
   wrap:{
    overflow: 'scroll',
    height: '100%',
    width: '90vw',
    overflowX: 'hidden', // Use 'hidden' to hide overflow
   },
});


export default style;