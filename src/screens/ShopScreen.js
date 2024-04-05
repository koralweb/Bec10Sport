import React from 'react';
import Wrapper from '../components/Wrapper';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import products from '../mobx/products';
import Product from '../components/Product';

const ShopScreen = () => {
  const renderProductsList = () => {
    return products.list.map(product => <Product product={product} />);
  };

  return (
    <Wrapper>
      <View style={styles.cont}>
        <View style={styles.topBlock}>
          <Text>Shop</Text>
        </View>
        <ScrollView>{renderProductsList()}</ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});

export default ShopScreen;
