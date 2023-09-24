import { StyleSheet } from "react-native-web";
import {colors} from '../../assets/constants.js'

import bannerImg from '../../assets/Skyline2.jpg';

const style = StyleSheet.create({

    banner: {
        width: 1470,
        height: 750,
        alignItems: "center",
        display: 'flex', // Use flex for layout
        //add backgorud image
        // Add background image using template literals
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center', // Adjust to your preference
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', // You can adjust this based on your requirements
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (0.5 for 50% darkness)


    },
    mainWrapper: {
        marginLeft: 400,

        width: 700,
        height: 500,
        borderRadius: 5,
        backgroundColor: colors.black,
        opacity: 0.8,

    },
    mainTittle: {
        display: 'inline-block',

        marginTop: '10vh',
        marginLeft: '3vw',
        fontSize: 25,
        color: "white",
        fontStyle: "Bold",
        //center text
    },
    listaRespuestas:{
        display: 'inline-block',


        marginleft: '10vw',
        fontSize: 25,
        color: "white",

        //center text

    },
    startButton: {
        margin: 'auto',
        marginTop: 50,
        width: 200,
        height: 70,
        backgroundColor: colors.primary,
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 5,
        borderWidth: 2,

    },

    button1: {
        backgroundColor: colors.primary,
        color: "white",
        marginTop: '15vh',
        marginLeft: '5vw',

    },
    button2: {
        backgroundColor: colors.primary,
        color: "white",
        marginLeft: '7vw',

    }

});

export default style;