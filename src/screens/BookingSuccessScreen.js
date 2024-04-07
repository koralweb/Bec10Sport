import React from 'react';
import Wrapper from '../components/Wrapper';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const BookingSuccessScreen = () => {
  return (
    <Wrapper>
      <View style={styles.cont}>
        <View style={styles.content}>
          <View style={styles.vsLine}>
            <View style={styles.line} />
            <View style={styles.centerTextBlock}>
              <Text style={styles.text}>Ваш столик забронирован!</Text>
            </View>
            <View style={styles.line} />
          </View>
          <Image
            style={styles.smile}
            source={require('../assets/images/smileBooking.png')}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: Dimensions.get('window').width + 60,
    height: Dimensions.get('window').width + 60,
    backgroundColor: '#2E9C45',
    borderRadius: Dimensions.get('window').width / 2 + 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
  },
  line: {
    width: '25%',
    backgroundColor: '#000',
    height: 2,
  },
  vsLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTextBlock: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smile: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default BookingSuccessScreen;
