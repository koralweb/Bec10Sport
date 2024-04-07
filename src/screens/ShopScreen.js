import React, {useState} from 'react';
import Wrapper from '../components/Wrapper';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import products from '../mobx/products';
import Product from '../components/Product';

const ShopScreen = () => {
  const [currentProductType, setCurrentProductType] = useState('first');
  const renderProductsList = () => {
    return products.list
      .filter(prod => prod.type === currentProductType)
      .map(product => <Product product={product} key={product.id} />);
  };

  const renderTypeFilter = () => {
    return (
      <View style={styles.filterBlock}>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setCurrentProductType('first')}>
          <Image
            source={require('../assets/images/filter1.png')}
            style={styles.filterImage}
          />
          <Text style={styles.filterText}>Горячее</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setCurrentProductType('salads')}>
          <Image
            source={require('../assets/images/filter2.png')}
            style={styles.filterImage}
          />
          <Text style={styles.filterText}>салаты</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => setCurrentProductType('dessert')}>
          <Image
            source={require('../assets/images/filter3.png')}
            style={styles.filterImage}
          />
          <Text style={styles.filterText}>десерты</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Wrapper>
      <View style={styles.cont}>
        <View style={styles.topBlock}>
          <View style={styles.line} />
          <Text style={styles.menuText}>МЕНЮ</Text>
          <View style={styles.line} />
        </View>
        {renderTypeFilter()}
        <ScrollView>{renderProductsList()}</ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  menuText: {
    color: '#117D28',
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    backgroundColor: '#117D28',
    height: 3,
    flex: 1,
  },
  filterBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  filterImage: {
    width: 100,
    height: 100,
  },
  filterText: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  filterBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default ShopScreen;
