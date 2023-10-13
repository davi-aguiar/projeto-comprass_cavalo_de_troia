import { StyleSheet } from 'react-native';
import theme from '../../theme'; 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
    },
    searchButton: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 25,
        marginRight: 20,
    },
    elipseImage: {
        top: 0,
        position: 'absolute',
        zIndex: -1,
    },
    lupaImage: {
        top: 8,
        right: 12,
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 115,
    },
    logoImage: {

    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 110,
        marginBottom: 16,
    },
    text: {
        color: theme.COLORS.WHITE,
        fontSize: theme.FONT_SIZE.MD,
        marginRight: 16,
        marginLeft: 16,
    },
    cartImage: {
        width: 46,
        height: 46,
    },
});

export default styles;
