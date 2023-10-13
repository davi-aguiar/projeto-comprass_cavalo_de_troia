import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        
    },
    buttomContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: 60,
        paddingRight: 20,
        marginTop: 25,
    },
    touchableOpacity: {
        width: 30,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elipseImage: {
        position: 'absolute',
    },
    lupaImage: {
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