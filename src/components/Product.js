import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Product = ({product}) => {
  return (
    <View style={styles.cont}>
      <Text>{product.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#fff',
    margin: 5,
  },
});

export default Product;
