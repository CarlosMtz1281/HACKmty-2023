import { StyleSheet } from "react-native-web";
import {colors} from '../../assets/constants.js'

import bannerImg from '../../assets/Skyline2.jpg';

const style = StyleSheet.create({

    banner: {
        width: '100vw',
        height: '100vh',
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
    mainTxtWrapper: {
        marginLeft: 150,
        width: 1200,
        height: 400,
        display: 'flex', // Use flex for layout
        flexDirection: 'column', // or 'row' based on your design
        justifyContent: 'center', // or other appropriate value
    },
    mainTittle: {
        marginTop: 200,
        marginleft: 100,
        fontSize: 70,
        color: "white",
        fontStyle: "Bold",
        //center text
        textAlign: "center",
    },
    startButton: {
        margin: 'auto',
        marginLeft: '34vw',
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

});

export default style;