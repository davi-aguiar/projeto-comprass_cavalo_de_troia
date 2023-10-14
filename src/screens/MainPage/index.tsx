import React from 'react';
import { ScrollView, StatusBar} from 'react-native';

import HeaderMain from '../../components/HeaderMain';
import ProductItem from '../../components/Products';

function MainPage() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView>
        <HeaderMain />
        <ProductItem />
      </ScrollView>
    </>
  );
}

export default MainPage;