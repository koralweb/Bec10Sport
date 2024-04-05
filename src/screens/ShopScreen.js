import React from 'react';
import Wrapper from '../components/Wrapper';
import {StyleSheet, Text, View} from 'react-native';

const ShopScreen = () => {
  return (
    <Wrapper>
      <View style={styles.cont}>
        <View style={styles.topBlock}>
          <Text>Menu</Text>
        </View>
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
