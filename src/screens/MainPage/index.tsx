import React from 'react';
import { ScrollView, StatusBar} from 'react-native';
import styles from './styles';

import HeaderMain from '../../components/HeaderMain';



function MainPage() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView>
        <HeaderMain />

      </ScrollView>
    </>
  );
}

export default MainPage;