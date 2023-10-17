import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import HeaderMain from '../../components/HeaderMain';
import ProductItem from '../../components/Products';

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView>
        <HeaderMain onSearch={setSearchTerm} />
        <ProductItem searchTerm={searchTerm} />
      </ScrollView>
    </>
  );
}

export default MainPage;
