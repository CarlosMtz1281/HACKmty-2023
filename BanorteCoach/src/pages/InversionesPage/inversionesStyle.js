import { StyleSheet } from "react-native-web";
import {colors} from '../../assets/constants.js'

import bannerImg from '../../assets/Skyline2.jpg';
const style = StyleSheet.create({ 
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
        alignItems: "center",
    },
    mainTitle: {
        marginTop: 70,
        fontSize: 55,
        color: "black",
        fontStyle: "Bold",
        textAlign: "center",
    },
    // Put in the center page the container of invest
    investContainer: {
        width: "100vw",
        height: "70vh",
        alignItems: "center",
        display: 'flex', // Use flex for layout
        //column
        flexDirection: 'row', // or 'row' based on your design
    },
})

export default style