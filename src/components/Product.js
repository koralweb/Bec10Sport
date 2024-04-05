import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Product = ({product}) => {
  return (
    <View style={styles.cont}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.desc}>{product.desc}</Text>
        <View style={styles.line} />
        <View style={styles.info2}>
          <View style={styles.block1}>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <View style={styles.block2}>
            <Text style={styles.basket}>В корзину</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#fff',
    margin: 5,
    flexDirection: 'row',
  },
  line: {
    height: 5,
    width: '100%',
    backgroundColor: '#2E9C45',
  },
  image: {
    width: 279 / 3,
    height: 271 / 3,
  },
  info: {
    flex: 1,
    marginTop: 5,
  },
  name: {
    textAlign: 'right',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  desc: {
    textAlign: 'right',
    color: '#5C5C5C',
  },
  basket: {
    textAlign: 'center',
    borderWidth: 3,
    width: 100,
    marginTop: 10,
    marginBottom: 5,
  },
  info2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    marginTop: 5,
    color: 'white',
    fontSize: 30,
    width: 100,
    textAlign: 'center',
  },
  block1: {
    backgroundColor: '#2E9C45',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
});

export default Product;
