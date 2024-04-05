import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from './Header';
import {useRoute} from '@react-navigation/native';

const Wrapper = ({children}) => {
  const [routeName, setRouteName] = useState(useRoute().name);
  return (
    <SafeAreaView style={{flex: 1}}>
      {routeName !== 'Home' && <Header />}
      {children}
    </SafeAreaView>
  );
};

export default Wrapper;
