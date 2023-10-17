import React, { useState } from 'react';
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
    TextInput
} from './styles';

function HeaderMain({ onSearch }) {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (text) => {
        setSearchTerm(text);
        onSearch(text);
    };

    return (
        <Container>
            <ImageBackgroundStyled source={require('../../../assets/images/background-compass.png')}>
                <SearchButton onPress={() => setIsSearchVisible(!isSearchVisible)}>
                    <ElipseImage source={require('../../../assets/images/elipse-image.png')} />
                    <LupaImage source={require('../../../assets/images/lupa-image.png')} />
                </SearchButton>
                {isSearchVisible && (
                    <TextInput
                        value={searchTerm}
                        onChangeText={handleSearchChange}
                        placeholder="Enter the product name"
                        
                    />
                )}
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
