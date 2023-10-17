import React, { useState, useEffect } from 'react';
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
    TextInput,
    ProductDropdown,
    ProductDropdownItem,
    ProductImage,
    ProductTitle,
    ProductPrice
} from './styles';

function HeaderMain() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const handleSearchChange = (text) => {
        setSearchTerm(text);
    };

    return (
        <Container>
            <ImageBackgroundStyled source={require('../../../assets/images/background-compass.png')}>
                <SearchButton onPress={() => setIsSearchVisible(!isSearchVisible)}>
                    <ElipseImage source={require('../../../assets/images/elipse-image.png')} />
                    <LupaImage source={require('../../../assets/images/lupa-image.png')} />
                </SearchButton>
                {isSearchVisible && (
                    <>
                        <TextInput
                            value={searchTerm}
                            onChangeText={handleSearchChange}
                            placeholder="Enter the product name"
                        />
                        {searchTerm.trim() !== '' && (
                            <ProductDropdown>
                                {filteredProducts.map(product => (
                                    <ProductDropdownItem key={product.id}>
                                        <ProductImage source={{ uri: product.images[0] }} />
                                        <ProductTitle>{product.title}</ProductTitle>
                                        <ProductPrice>
                                            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                        </ProductPrice>
                                    </ProductDropdownItem>
                                ))}
                            </ProductDropdown>
                        )}
                    </>
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
