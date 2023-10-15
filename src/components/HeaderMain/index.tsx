import React from 'react';
import {
    Container,
    ImageBackgroundStyled,
    SearchButton,
    ElipseImage,
    LupaImage,
    LogoContainer,
    LogoImage,
    CartContainer,
    TextStyled,
    CartImage,
} from './styles';

function HeaderMain() {
    return (
        <Container>
            <ImageBackgroundStyled source={require('../../../assets/images/background-compass.png')}>
                <SearchButton>
                    <ElipseImage source={require('../../../assets/images/elipse-image.png')} />
                    <LupaImage source={require('../../../assets/images/lupa-image.png')} />
                </SearchButton>
                <LogoContainer>
                    <LogoImage source={require('../../../assets/images/comprass-logo.png')} />
                    
                </LogoContainer>

                <CartContainer>
                    <TextStyled>Aqui você sempre ganha!</TextStyled>
                    <CartImage source={require('../../../assets/images/cart-image.png')} />
                </CartContainer>
            </ImageBackgroundStyled>
        </Container>
    );
}

export default HeaderMain;
