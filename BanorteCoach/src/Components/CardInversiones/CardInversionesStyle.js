import { StyleSheet } from 'react-native-web';
import {colors} from '../../assets/constants.js';

const style = StyleSheet.create({
    cardContainer: {
        width: '64vw',
        height: '28vh',
        backgroundColor: colors.background,
        borderRadius: 15,
        opacity: 1,
        marginLeft: '2vw',
        display: 'flex',
        marginTop: '2vh',


    },
    imgContainer:{
        borderRadius: 100,
        //make image small
        width: '10vw',
        height: '10vw',
        display: 'inline-block',
        marginTop: '4vh',
        marginLeft: '2vw',

    },

    headerContainer:{
        height: '10vh',
        width: '100vw',
        display: 'flex',
        marginTop: '2vh',
        marginLeft: '2vw',
        //backgroundColor: colors.green,

    },
    footerContainer:{
        height: '15vh',
        width: '100vw',
        display: 'flex',
        marginTop: '10vh',
        marginLeft: '-47vw',
        marginRight: '-20vw',
        alignItems: 'flex-end', // Align to the bottom

        //backgroundColor: colors.primary,
    },


    mainInversion:{
        fontSize: 25,
        width: '20vw',
        marginTop: '2vh',
        marginLeft: '2vw',
        color: colors.black,
        display: 'inline-block',
    },
    compatibilidad:{
        fontSize: 20,
        width: '20vw',
        marginTop: '3vh',
        marginLeft: '10vw',
        color: colors.green,
        display: 'inline-block',
    },


    proyeccion:{
        fontSize: 20,
        marginTop: '2vh',
        width: '20 vw',
        marginLeft: '-2.5vw',
        color: colors.black,
        display: 'flex',

    },

    //MODALE

    modalHead: {
        fontSize: 25,
        color: colors.black,
    },
    modalTxt:{
        fontSize: 15,
        color: colors.black,
    },
    button1:{
        display: 'absolute',
        marginTop: '13vh',
        marginRight: '23vw',
        height: '10vh',
        width: '25vw',
        fontSize: 15,
        backgroundColor: colors.black,
        color: colors.white,
    },
    button2:{
        marginTop: '13vh',
        marginLeft: '-22vw',
        marginRight: '2vw',
        height: '10vh',
        width: '15vw',
        fontSize: 15,
        color: colors.white,
        backgroundColor: colors.primary,
    }



}
)

export default style;