

export const styles = {
    // Header on top of the page covers all width
    Header: {
        width: '100%',
        height: '10vh',
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        left: '0',
    },

    // Pages on the right side of the header
    paginasHeader: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '5rem',
        marginRight: '-20rem',
    },

    text: {
        color: 'white',
        fontSize: '0.9rem',
    },

    // red to white
    logo: {
        width: '15rem',
        hueRotation: 90,
        filter: 'brightness(0) invert(1)',
    },
    banorte: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    divider: {
        color: 'white',
        fontSize: '1.5rem',

    }
}