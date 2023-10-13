import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    touchableOpacity: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 25,
        marginRight: 20,
        
    },
    elipseImage: {
        top: 8,
        right: 10,
    },
    lupaImage: {
        top: 0,
        position: 'absolute',
        zIndex: -1,
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110,

    },
    logoImage: {

    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 110,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        marginRight: 16,
        marginLeft: 16,
    },
    cartImage: {
        width: 46,
        height: 46,
    },
});

export default styles;