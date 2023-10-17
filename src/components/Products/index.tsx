import React, { useState, useEffect } from 'react';
import {
    ProductsContainer,
    ProductItemContainer,
    CounterContainer,
    TouchableButton,
    ButtonImage,
    CounterText,
    ProductBox,
    ProductImage,
    ProductName,
    ProductPrice,
    VerticalScrollView,
    LoadingText,
    CategoryContainer,
    CategoryText,
    HorizontalScrollView,
    CategoryBox,
    ViewAllButton,
    ViewAllText,
} from './styles';

const ProductItem = React.memo(function ProductItem({ product }) {
    const [count, setCount] = useState(0);
    const { images, title, price } = product;

    const incrementCount = () => setCount(count => count + 1);
    const decrementCount = () => setCount(count => (count > 0 ? count - 1 : 0));

    return (
        <ProductItemContainer>
            <CounterContainer>
                <TouchableButton onPress={decrementCount}>
                    <ButtonImage source={require('../../../assets/images/remove-button.png')} />
                </TouchableButton>
                <CounterText>{count}</CounterText>
                <TouchableButton onPress={incrementCount}>
                    <ButtonImage source={require('../../../assets/images/add-button.png')} />
                </TouchableButton>
            </CounterContainer>

            <ProductBox>
                <ProductImage source={{ uri: images[0] }} />
                <ProductName>{title}</ProductName>
                <ProductPrice>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ProductPrice>
            </ProductBox>
        </ProductItemContainer>
    );
});

const categorizeProducts = (products) => products.reduce((categories, product) => {
    const categoryName = product.category.name;
    if (!categories[categoryName]) {
        categories[categoryName] = [];
    }
    categories[categoryName].push(product);
    return categories;
}, {});

function Products({ searchTerm }) {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await response.json();
                setProducts(categorizeProducts(data));
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = Object.entries(products).reduce((acc, [categoryName, categoryProducts]) => {
        const filtered = categoryProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filtered.length) {
            acc[categoryName] = filtered;
        }
        return acc;
    }, {});

    if (loading) return <LoadingText>Carregando produtos...</LoadingText>;
    if (error) return <LoadingText>Erro ao carregar produtos.</LoadingText>;

    return (
        <VerticalScrollView>
            {Object.entries(filteredProducts).map(([categoryName, categoryProducts]) => (
                <CategoryContainer key={categoryName}>
                    <CategoryBox>
                    <CategoryText>{categoryName}</CategoryText>
                    <ViewAllButton>
                        <ViewAllText>View All</ViewAllText>
                    </ViewAllButton>
                    </CategoryBox>
                    <HorizontalScrollView>
                        <ProductsContainer>
                            {categoryProducts.map(product => (
                                <ProductItem key={product.id} product={product} />
                            ))}
                        </ProductsContainer>
                    </HorizontalScrollView>
                </CategoryContainer>
            ))}
        </VerticalScrollView>
    );
}

export default Products;
