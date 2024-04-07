import React from 'react';
import Wrapper from '../components/Wrapper';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const inputs = [
  'Ваше имя....',
  'Номер телефона',
  'E-mail',
  'Дата',
  'Время',
  'Номер столика',
];

const BookingScreen = () => {
  const navigation = useNavigation();
  const renderInputs = () => {
    return inputs.map(input => (
      <TextInput
        style={styles.input}
        placeholder={input}
        key={input}
        placeholderTextColor="#5C5959"
      />
    ));
  };

  return (
    <Wrapper>
      <View style={styles.cont}>
        <Text style={styles.mainTitle}>Резерв Вашего столика</Text>
        <View style={styles.contentBlock}>
          <Image
            source={require('../assets/images/bookingIcon.png')}
            style={styles.icon}
          />
          {renderInputs()}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push('BookingSuccess')}>
            <Text>Подтвердить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  mainTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 30,
    marginBottom: 20,
  },
  contentBlock: {
    backgroundColor: '#2E9C45',
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: Dimensions.get('window').width / 2,
    borderTopRightRadius: Dimensions.get('window').width / 2,
  },
  icon: {
    width: 204 / 3,
    height: 234 / 3,
    marginTop: 30,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    height: 35,
    marginBottom: 10,
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 'auto',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#1A1A1A',
  },
});

export default BookingScreen;
