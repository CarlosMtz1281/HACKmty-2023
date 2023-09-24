import { StyleSheet } from "react-native-web";
import {colors} from '../../assets/constants.js'

import bannerImg from '../../assets/Skyline2.jpg';

const style = StyleSheet.create({

   preguntaTxt:{
      height: '10vh',
      fontSize: 30,
      color: "white",
      fontStyle: "Bold",
      //center text
      marginleft:  '20vw',
      display: 'block',
      marginLeft: '5vw',
      marginRight: '5vw',
      marginTop: '15vh',
   },

   txtInput: {
    width: 400,
    height: 50,
    marginleft: 400,
    backgroundColor: colors.white,
    color: "black",
    borderRadius: 5,
    borderWidth: 2,
    display: 'block',
    //center to the right
    marginLeft: '5vw',
    marginTop: '10vh',

   },
   dropdown:{
        width: 400,
        height: 50,
        marginleft: 400,
        backgroundColor: colors.white,
        color: "black",
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 2,
        display: 'block',
        //center to the right
        marginLeft: '5vw',
        marginTop: '10vh',
   },

    firstNextButton:{
    marginLeft: '38.3vw',
    display: 'inline-block',
    marginTop: '15vh',
    backgroundColor: colors.primary,
    color: "white",
    },

   nextButton:{
    marginLeft: '28vw',
    display: 'inline-block',
    marginTop: '15vh',
    backgroundColor: colors.primary,
    color: "white",
   },

   backButton:{
    marginLeft: '5vw',
    display: 'inline-block',

    marginTop: '15vh',
    backgroundColor: colors.primary,
    color: "white",
   }



});

export default style;