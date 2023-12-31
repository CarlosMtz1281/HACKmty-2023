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
        overflow: 'hidden',


    },
    mainWrapper: {
        marginLeft: 0,

        width: '90vw',
        height: '85vh',
        marginLeft: '5vw',
        marginTop: '8vh',
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        //place in center
        alignItems: "center",
        display: 'flex', // Use flex for layout
        //column
        flexDirection: 'column', // or 'row' based on your design
    },
    // Add title text on top and center just below header
    mainContainer:{
        width: "100vw",
        alignItems: "center",
        display: 'flex', // Use flex for layout
        //column
        flexDirection: 'column', // or 'row' based on your design
    },
    mainTxtWrapper: {
        width: "100vw",
        alignItems:"left",
        display: 'inline-block',
    },
    HeaderWrap:{
        marginLeft: '125vw',
        width: "100vw",
        alignItems: "center",
        display: 'flex', // Use flex for layout
        //column
        flexDirection: 'row', // or 'row' based on your design

    },
    infoContainer:{
        fontStyle:"italic",
        marginTop: '3vh',
        display: 'inline-block',
    },
    montoInicial: {
        marginLeft: '20vw',
        color: colors.white,
        fontSize: 20,
        display: 'inline-block',
    },
    plazoInicial: {
        color: colors.white,
        fontSize: 20,
        display: 'inline-block',
        marginLeft: '5vw',
    },
    mainTitle: {
        marginTop: '5vh',
        marginLeft: '-55vw',
        fontSize: 40,
        color: colors.white,
        fontStyle: "Bold",

    },

    secondaryWrap: {
        display: 'inline-block',
        height: '65vh',
        width: '15vw',
        marginLeft: '-70vw',
        backgroundColor: colors.background,
        overflowX: 'hidden',
    },

    primaryWrap: {
        display: 'inline-block',
        height: '65vh',
        width: '65vw',
        marginLeft: '15vw',
        marginTop: '-65vh',
    },


    // Put in the center page the container of invest
    investContainer: {
        width: "100vw",
        height: "70vh",
        alignItems: "center",
        justifyContent: "center",
        display: 'flex', // Use flex for layout
        //column
        flexDirection: 'row', // or 'row' based on your design
    },
    button: {
        width: '100%',
        height: '21.66vh',
        borderRadius: '0px',
        backgroundColor: colors.gray,
        fontWeight: 'bold',
        fontSize: '1.5vw',
        //add whithe border
        borderWidth: 1,
        borderColor: colors.black,

        color: colors.white,
    },

    activeButton: {
        backgroundColor: colors.primary,
        color: colors.white,
        outline: 'none',
    },
})

export default style