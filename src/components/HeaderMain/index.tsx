import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import styles from './styles';

function HeaderMain() {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/background-compass.png')}
                style={styles.imageBackground}
            >
                    <TouchableOpacity style={styles.searchButton}>
                        <Image
                            source={require('../../../assets/images/elipse-image.png')}
                            style={styles.elipseImage}
                        />
                        <Image
                            source={require('../../../assets/images/lupa-image.png')}
                            style={styles.lupaImage}
                        />
                    </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/images/c-letter.png')} style={styles.logoImage} />
                    <Image source={require('../../../assets/images/uol-logo.png')} style={styles.logoImage} />
                    <Image source={require('../../../assets/images/compass-letters.png')} style={styles.logoImage} />
                </View>

                <View style={styles.cartContainer}>
                    <Text style={styles.text}>Aqui você sempre ganha!</Text>
                    <Image
                        source={require('../../../assets/images/cart-image.png')}
                        style={styles.cartImage}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HeaderMain;
