import React, { useState, useEffect } from 'react';
import {
    VerticalScrollView,
    LoadingText,
    CategoryContainer,
    CategoryText,
    HorizontalScrollView,
    ProductsContainer,
    ProductItemContainer,
    CounterContainer,
    TouchableButton,
    ButtonImage,
    CounterText,
    ProductBox,
    ProductImage,
    ProductName,
    ProductPrice
  } from './styles';

  function ProductItem({ product }) {
    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const decrementCount = () => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    };
  
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
  
        <ProductImage source={{ uri: product.images[0] }} />
  
        <ProductBox>
          <ProductName>{product.title}</ProductName>
          <ProductPrice>{product.price},00 R$</ProductPrice>
        </ProductBox>
      </ProductItemContainer>
    );
  }
  
  const categorizeProducts = (products) => {
    return products.reduce((categories, product) => {
      const categoryName = product.category.name;
      if (!categories[categoryName]) {
        categories[categoryName] = [];
      }
      categories[categoryName].push(product);
      return categories;
    }, {});
  };
  
  export default function Products() {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {
          setProducts(categorizeProducts(data));
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao buscar produtos:", error);
          setLoading(false);
        });
    }, []);
  
    return (
      <VerticalScrollView>
        {loading ? (
          <LoadingText>Carregando produtos...</LoadingText>
        ) : (
          Object.entries(products).map(([categoryName, categoryProducts]) => (
            <CategoryContainer key={categoryName}>
              <CategoryText>{categoryName}</CategoryText>
              <HorizontalScrollView>
                <ProductsContainer>
                  {categoryProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </ProductsContainer>
              </HorizontalScrollView>
            </CategoryContainer>
          ))
        )}
      </VerticalScrollView>
    );
  }