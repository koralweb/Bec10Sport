import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './Header';
import {useRoute} from '@react-navigation/native';

const Wrapper = ({children}) => {
  const [routeName, setRouteName] = useState(useRoute().name);
  return (
    <SafeAreaView style={styles.cont}>
      {routeName !== 'Home' && <Header />}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
});

export default Wrapper;
